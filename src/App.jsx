import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
