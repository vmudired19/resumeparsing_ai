import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [page, setPage] = useState('signup');
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <h2>Welcome! You are logged in.</h2>;
  }

  return (
    <div>
      {page === 'signup' ? (
        <Signup 
          onSignupSuccess={() => setPage('login')}
          onSwitchToLogin={() => setPage('login')} 
        />
      ) : (
        <Login onLoginSuccess={() => setLoggedIn('true')} />
      )}
    </div>
  );
}

export default App;
