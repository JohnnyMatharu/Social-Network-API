var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/social-network', function() {
 
  // Load Mongoose models
  seeder.loadModels([
      //to be checked 
    'models/user.js',
    'models/thought.js'
  ]);
 
  // Clear specified collections
  //This part needs to be checked 
  seeder.clearModels(['User', 'Thought'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'User',
        'documents': [
            {
                'username': 'Johnny',
                'email': 'jaani.matharu@gmail.com'
            },
            {
                'username': 'Bobby',
                'email': 'bobby_genius@yahoo.ca'
            }
        ]
    },
    {
      'model': 'Thought',
      'documents': [
          {
              'username': 'Johnny',
              'thoughtText': 'I love spicy food',
              'Reaction': [
{
  'username': 'Bobby',
  'reactionBody': 'I disagree'

}

              ]
          },
          {
              'username': 'Bobby',
              'thoughtText': 'I like all types of food'
          }
      ]
  }

  ];