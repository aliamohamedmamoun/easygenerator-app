import React from 'react';
import { NavLink } from 'react-router-dom';

import { NAV_LINKS } from '../../constants/routes';

import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navList}>
        {NAV_LINKS.map((nav) => (
          <NavLink
            key={nav.title}
            to={nav.to}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ''}`
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
export default Header;
