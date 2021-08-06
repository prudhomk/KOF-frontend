import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>King Of Fighters Combatants</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/add'}>Add a Fighter</Link>
    </header>

  );
};

export default Header;
