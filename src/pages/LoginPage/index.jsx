import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import Header from '../../components/Header';

function LoginPage() {
  return (
    <section>
    <Header />
      <h2>Login to your account</h2>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
