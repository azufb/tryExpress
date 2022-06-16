import './App.css';
import axios from 'axios';
import { useState } from 'react';
import UserForm from './components/UserForm';

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
    </div>
  );
}

export default App;
