import React, { useState } from 'react';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import ExtraComponent from './components/ExtraComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>My React App</h1>
      {!isLoggedIn ? (
        <RegistrationForm onLogin={handleLogin} />
      ) : (
        <>
          <h2>Welcome, {username}!</h2>
          <Counter />
          <ExtraComponent />
        </>
      )}
    </div>
  );
}

export default App;