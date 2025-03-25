import React from 'react';
import { Link } from 'react-router-dom';

function Home({ poll }) {
  return (
    <div className="container">
      <h1>Welcome to the Polling System</h1>
      <p>This app lets you vote and see real‑time poll results.</p>
      <Link to="/vote">
        <button>Start Voting</button>
      </Link>
    </div>
  );
}

export default Home;
