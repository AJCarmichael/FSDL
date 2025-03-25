import React from 'react';

function PollResults({ poll }) {
  const totalVotes = poll.votes.reduce((sum, v) => sum + v, 0);
  return (
    <div>
      <h2>Poll Results</h2>
      {poll.options.map((option, index) => {
        const count = poll.votes[index];
        const percent = totalVotes ? ((count / totalVotes) * 100).toFixed(1) : 0;
        return (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <strong>{option}:</strong> {count} vote(s) – {percent}%
            <div style={{
              background: '#eee',
              borderRadius: '4px',
              overflow: 'hidden',
              marginTop: '0.3rem'
            }}>
              <div style={{
                width: `${percent}%`,
                background: '#007acc',
                height: '1rem'
              }} />
            </div>
          </div>
        );
      })}
      <p>Total Votes: {totalVotes}</p>
    </div>
  );
}

export default PollResults;
