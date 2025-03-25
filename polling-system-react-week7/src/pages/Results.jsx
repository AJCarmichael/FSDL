import React from 'react';
import PollResults from '../components/PollResults';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Import Header

function Results({ poll }) {
  return (
    <div className="container">
      <Header /> {/* Include Header */}
      <PollResults poll={poll} />
      <Link to="/vote">
        <button style={{ marginTop: '1rem' }}>Vote Again</button>
      </Link>
    </div>
  );
}

export default Results;
