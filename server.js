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


//You may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.
//Walkthrough video with link in readme and submitted seperate

//Acceptance Criteria
/*
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
*/



//Hilary demo: everything in the video
//User, thought and reaction as models and friends as sub-document 

//In addition to this, your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia Core.

//make sure Includes Reactions as the reaction field's subdocument schema in the Thought model.

/*
Video must 

A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.

The walkthrough video must show all of the technical acceptance criteria being met.

The walkthrough video must demonstrate how to start the application’s server.

The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia Core.

The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia Core.

The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia Core.

Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia Core.

Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia Core.

*/


/*
Repository contains a high-quality README with description and a link to a walkthrough video.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
*/



