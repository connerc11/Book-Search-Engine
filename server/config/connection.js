const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://conner11:USCaptain33@cluster0.vz0jz.mongodb.net/book-search-engine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  
});

module.exports = mongoose.connection;
