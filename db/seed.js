var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/social-network', function() {
 
  // Load Mongoose models
  seeder.loadModels([
      //to be checked 
    'models/user.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['User'], function() {
 
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
    }
];