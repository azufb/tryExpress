import './App.css';
import axios from 'axios';
import { useState } from 'react';
import UserForm from './components/UserForm';
import SignInForm from './components/SignInForm';

function App() {
  const [message, setMessage] = useState('');

  axios.get('http://localhost:3001/api', {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    setMessage(res.data.message);
  });

  return (
    <div className="App">
      <h1>フロント側だよ〜。React使ってま〜す。</h1>
      <h2>message: {message}</h2>
      <UserForm />
      <SignInForm />
    </div>
  );
}

export default App;
