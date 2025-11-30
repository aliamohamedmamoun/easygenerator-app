export enum APP_ROUTES {
  HOME = '/',
  SIGN_IN = '/login',
  SIGN_UP = '/signup',
}

export const NAV_LINKS = [
  { title: 'Sign up', to: APP_ROUTES.SIGN_UP },
  { title: 'Sign in', to: APP_ROUTES.SIGN_IN },
  { title: 'Home', to: APP_ROUTES.HOME },
];
