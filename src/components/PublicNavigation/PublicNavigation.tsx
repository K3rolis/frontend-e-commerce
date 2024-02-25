import React from 'react';
import Container from '../../common/Container/Container';
import styles from './PublicNavigation.module.scss';
import searchIcon from '../../assets/icons/searchIcon.svg';
import profileIcon from '../../assets/icons/profileIcon.svg';
import shoppingBagIcon from '../../assets/icons/shoppingBagIcon.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../config/router/routes';

const PublicNavigation = () => {
  return (
    <Container>
      <nav>
        <div className={styles.logo}>
          <Link to={routes.homepage}>K3rolis</Link>
        </div>
        <ul className={styles.navigationLinks}>
          <li className={styles.active}>
            <Link to={routes.homepage}>Home</Link>
          </li>
          <li>Shop</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
        <div className={styles.icons}>
          <div className={styles.search}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
          <div className={styles.profile}>
            <img src={profileIcon} alt="Profile Icon" />
          </div>
          <div className={styles.shoppingBag}>
            <img src={shoppingBagIcon} alt="Shopping Bag Icon" />
            <span className={styles.shoppingBagQuantity}>2</span>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default PublicNavigation;
