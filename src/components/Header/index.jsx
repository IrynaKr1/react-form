import { Link, useLocation } from 'react-router';
import styles from './Header.module.scss';

function Header () {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src='logoipsum-410.svg'
          alt='Logo for page'
        />
      </div>
      {isLoginPage ? (
        <Link to='/register' className={styles.linkStyle}>
          Signup
        </Link>
      ) : (
        <Link to='/' className={styles.linkStyle}>
          Login
        </Link>
      )}
    </header>
  );
}

export default Header;
