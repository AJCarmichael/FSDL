import React from 'react';
import PollForm from '../components/PollForm';
import Header from '../components/Header'; // Import Header

function Vote({ poll, onVote }) {
  return (
    <div className="container">
      <Header /> {/* Include Header */}
      <PollForm poll={poll} onVote={onVote} />
    </div>
  );
}

export default Vote;
