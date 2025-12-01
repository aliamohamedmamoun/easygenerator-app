import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { APP_ROUTES, NAV_LINKS } from "../../constants/routes";

import styles from "./index.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../Button";
import { logout } from "../../apis/auth";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, fetchCurrentUser } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logout();
      fetchCurrentUser();
      navigate(APP_ROUTES.SIGN_IN);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed logout try agin');
    }
  };
  return (
    <header className={styles.header}>
      <nav className={styles.navList}>
        {NAV_LINKS.map((nav) => (
          <NavLink
            key={nav.title}
            to={nav.to}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>
      {isLoggedIn && (
        <div className={styles.userWrapper}>
          <p className={styles.userName}>Welcome {user.name}</p>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </header>
  );
};
export default Header;
