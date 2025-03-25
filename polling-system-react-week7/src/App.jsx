import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Vote from './pages/Vote';
import Results from './pages/Results';

function App () {
  // Poll question, options and votes state
  const [pollData, setPollData] = useState({
    question: 'What is your favorite programming language?',
    options: ['JavaScript', 'Python', 'Java', 'C++'],
    votes: [0, 0, 0, 0]
  });

  const handleVote = (optionIndex) => {
    setPollData(prev => {
      const newVotes = [...prev.votes];
      newVotes[optionIndex] += 1;
      return { ...prev, votes: newVotes };
    });
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home poll={pollData} />} />
        <Route path="/vote" element={<Vote poll={pollData} onVote={handleVote} />} />
        <Route path="/results" element={<Results poll={pollData} />} />
      </Routes>
    </div>
  );
}

export default App;
