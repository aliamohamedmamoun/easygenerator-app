import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getProfile } from "../apis/auth";

interface AuthContextType {
  user: any;
  setUser: React.Dispatch<any>;
  isLoggedIn: boolean;
  fetchCurrentUser: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  fetchCurrentUser: async () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);

  const fetchCurrentUser = async () => {
    try {
      const userData = await getProfile();
      setUser(userData);
    } catch (err: any) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoggedIn: !!user, fetchCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
