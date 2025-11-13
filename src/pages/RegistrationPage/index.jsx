
import RegistrationForm from '../../components/forms/RegistrationForm';
import Header from '../../components/Header';

function RegistrationPage() {
  return (
    <section>
      <Header />
      <h2>Create an account</h2>
      <p>We always keep your name and email address private</p>
      <RegistrationForm />
    </section>
  );
}

export default RegistrationPage;
