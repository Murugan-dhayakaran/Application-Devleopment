import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Login';
import RegistrationForm from './components/register';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm/>
    </div>
  );
}

export default App;
