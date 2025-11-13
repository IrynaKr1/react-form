import React from 'react';
import RegistrationForm from '../../components/forms/RegistrationForm';
import Header from '../../components/Header';
import styles from './RegistrationPage.module.scss';

function RegistrationPage() {
  return (
    <div className={styles.registrationPageContainer}>
      <Header />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Create an account</h2>
        <p className={styles.subtitle}>
          We always keep your name and email address private
        </p>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
