const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/notebook'; // mongodb://localhost:27017/ is the default path where MongoDB listens for connections.

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB haha ');
}

module.exports = connectToMongo;