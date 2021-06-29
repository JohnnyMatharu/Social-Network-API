const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const ReactionSchema = new Schema(
  
  {
//this needs to be verified for default part as new objectid
reactionId: {
    default : Schema.Types.ObjectId
    },

reactionBody: {
    type: String,
    max: 280,
    required: true
  },

username: {
    type: String,
    required: true
},
 
    createdAt: { 
      type: Date, 
      default: Date.now(),
      //this getter needs to be checked, may need to export the format function in dateFormat.js
      get: dateFormat
    }
  },
  {
    toJSON: {
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);



const ThoughtSchema = new Schema(
  
  {
    thoughtText: {
      type: String,
      min:   1,
      max: 280,
      required: true
      
    },
// createdAt above has to be checked and so is min and max
// HERE
    createdAt: { 
      type: Date, 
      default: Date.now(),
      //this getter needs to be checked, may need to export the format function in dateFormat.js
      get: dateFormat
    },
  
    username: {
      type: String,
      required: true
},
//this has to be checked 
reactions: [ReactionSchema]
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

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
