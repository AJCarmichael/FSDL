import React from 'react';
import PollForm from '../components/PollForm';

function Vote({ poll, onVote }) {
  return (
    <div className="container">
      <PollForm poll={poll} onVote={onVote} />
    </div>
  );
}

export default Vote;
