const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./controllers/api-routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));












// Require NPM, NPM init (done) 
// Require Mongoose (done, works like sequelize)
// Require Express (done)
// Require Mongoose Validator (email validator done)
// Require Mongoose Seeder

//MOngo terminal is running (just type mongo it will run, if problem restart along with services and path command)
// that is missing in module or documentation, your version is 4.2 not anything else)






