import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { Link } from 'react-router';

function LoginPage() {
  return (
    <section>
      <header>
        <img src='logoipsum-410.svg' alt='Logo for page' />
        <Link to='/register'>Signup</Link>
      </header>
      <h2>Login to your account</h2>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
