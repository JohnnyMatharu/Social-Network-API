//Now you have to add router... to every Crud operation, check documentation and weekly activities

const {User} = require('../../models');
const router = require('express').Router();
// const user if repetitive, has to be checked
const User = {
  // API Routes
  //check this format
//  /api/users

  getAllUser(req, res) {
    User.find({})
    //HERE
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one pizza by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })

//GET a single user by its _id and populated thought and friend data
      .populate({
        path: 'thoughts',
        select: '-__v',

        //to be checked to have 2 paths
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
//POST a new user:

// example data
//{
  //"username": "lernantino",
  //"email": "lernantino@gmail.com"
//}

  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
    },


//this is PUT, to update, HERE
//PUT to update a user by its _id


  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  //DELETE to remove user by its _id

 // BONUS: Remove a user's associated thoughts when deleted.
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
};

//this is to be checked
module.exports = router;



/*
HERE







/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list


*/