import React from 'react';
import PollResults from '../components/PollResults';
import { Link } from 'react-router-dom';

function Results({ poll }) {
  return (
    <div className="container">
      <PollResults poll={poll} />
      <Link to="/vote">
        <button style={{ marginTop: '1rem' }}>Vote Again</button>
      </Link>
    </div>
  );
}

export default Results;
