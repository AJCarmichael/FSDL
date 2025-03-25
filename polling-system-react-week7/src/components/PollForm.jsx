import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PollForm({ poll, onVote }) {
  const [error, setError] = useState('');
  const radioRef = useRef([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = radioRef.current.find(input => input.checked);
    if (selected === undefined) {
      setError('Please select an option before voting.');
      return;
    }
    setError('');
    onVote(Number(selected.value));
    navigate('/results');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{poll.question}</h2>
      {poll.options.map((option, index) => (
        <div key={index}>
          <input
            ref={el => radioRef.current[index] = el}
            type="radio"
            id={`option-${index}`}
            name="pollOption"
            value={index}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit Vote</button>
    </form>
  );
}

export default PollForm;
