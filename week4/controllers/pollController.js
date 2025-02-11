const Poll = require('../models/poll');

exports.getPoll = async (req, res) => {
  const poll = await Poll.findOne();
  res.json(poll);
};

exports.vote = async (req, res) => {
  const { optionIndex } = req.body;
  const poll = await Poll.findOne();
  poll.votes[optionIndex]++;
  await poll.save();
  res.json(poll);
};
