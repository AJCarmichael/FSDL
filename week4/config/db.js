const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect('mongodb+srv://samuelrod2476:samuel123@cluster0.ieoei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Database connected');
  }).catch(err => {
    console.error('Database connection error:', err);
  });
};
