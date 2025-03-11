import React, { useState } from 'react';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import ExtraComponent from './components/ExtraComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>My React App</h1>
      {!isLoggedIn ? (
        <RegistrationForm onLogin={handleLogin} />
      ) : (
        <>
          <Counter />
          <ExtraComponent />
        </>
      )}
    </div>
  );
}

export default App;