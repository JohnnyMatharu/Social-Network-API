const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
      //this getter needs to be checked
      get: timestamp 
    },
  
    username: {
      type: String,
      required: true
},
reactions: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Reaction'
  }
]
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
