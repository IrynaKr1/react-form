import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import Header from '../../components/Header';
import styles from './LoginPage.module.scss';

function LoginPage() {
  return (
    <div className={styles.loginPageContainer}>
      <Header />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Login to your account</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
