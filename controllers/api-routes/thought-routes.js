const { Thought } = require('../../models');
const router = require('express').Router();



router.get('/', (req, res) => {
  //  GET to get all thoughts

  Thought.find({})

    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
}),

  //GET to get a single thought by its _id
  router.get('/:id', (req, res) => {
    Thought.findOne({ _id: req.params.id })
      //check the following
      //.select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  })

//Make sure it does following, check it out, and instruction underneath, may need to push in array for thoughts in user model
//{
//"thoughtText": "Here's a cool thought...",
// "username": "lernantino",
// "userId": "5edff358a0fcb779aa7b118b"
// }

//To be understood
//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)




//the reason for the code to look like this is because thoughts dont have id and they will connect to 
//user id, so every thought will have id that is actually userId but accessed/referenced as thoughtId
//for CRUD operations on it
router.post('/', (req, res) => {
  Thought.create(req.body)
    .then(dbUserData => {
      return User.findOneAndUpdate(
        {_id:req.body.userId},
        {$push: {thoughts: dbUserData._id}},
        {new: true}
      )
    })
    .catch(err => res.json(err));
});
  


//PUT to update a thought by its _id
//we used user id to update not thought id as there is none
router.put('/:id', (req, res) => {
  Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No User found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
});




//DELETE to remove a thought by its _id

router.delete('/:id', (req, res) => {
  Thought.findOneAndDelete({ _id: req.params.id })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
});


//Needs thorough checking

//  /api/thoughts/:thoughtId/reactions

//  POST to create a reaction stored in a single thought's reactions array field

router.post('/:thoughtId/reactions', (req, res) => {
  console.log("My post reaction route was hit");
  console.log(req.params.thoughtId);
 

  res.status(200).json({ message: "Route hit!" });

  Thought.findOneAndUpdate({
    _id: req.params.thoughtId
  }, {
    $addToSet: {
      reactions: req.body
    }
  }, {
    new: true
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No User found with this id!' });
      return;
    }
    res.json(dbUserData);
  })
    .catch(err => res.json(err));
});


//To be checked thoroughly
//DELETE to pull and remove a reaction by the reaction's reactionId value

router.delete('/:thoughtId/reactions/:reactionId', (req, res) => {
  Thought.findOneAndUpdate({
    _id: req.params.thoughtId
  }, {
    $pull: {
      reactions: { _id : req.params.reactionId }
    }
    }, {
    new: true
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No User found with this id!' });
      return;
    }
    res.json(dbUserData);
  })
    .catch(err => res.json(err));
});
//this is to be checked
module.exports = router;