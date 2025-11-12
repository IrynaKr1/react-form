import { Link } from 'react-router';
import RegistrationForm from '../../components/forms/RegistrationForm';

function RegistrationPage() {
  return (
    <section>
      <header>
        <img src='logoipsum-410.svg' alt='Logo for page' />
        <Link to='/'>Login</Link>
      </header>
      <h2>Create an account</h2>
      <p>We always keep your name and email address private</p>
      <RegistrationForm />
    </section>
  );
}

export default RegistrationPage;
