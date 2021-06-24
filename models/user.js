const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
let validator = require('validator')

const UserSchema = new Schema(
  
  // Mongo is working now, install the 3T as workbench and connect your database, seed files, use activities
  // if needed and use database name as created, use TA terminal instuctions if caught again with installation
  // make seeds, make user model and route first and test first 
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },

email: {
  type: String,
  required: true,
  unique: true,
  lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
},
thoughts: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }
],
//Check this out, needs revision
//Array of _id values referencing the User model (self-reference)

friends: [
  {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

//Check this out
/*
Schema Settings
Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
*/
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;
