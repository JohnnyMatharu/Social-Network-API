/*
const { user } = require('../../models');

// const user if repetitive, has to be checked
const user = {
  // get all pizzas
  getAllPizza(req, res) {
    Pizza.find({})
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one pizza by id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createPizza
  createPizza({ body }, res) {
    Pizza.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  },

  // update pizza by id
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },

  // delete pizza
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  }
};

module.exports = user-routes;
*/




/*
API Routes
/api/users

GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:

// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
PUT to update a user by its _id

DELETE to remove user by its _id

BONUS: Remove a user's associated thoughts when deleted.

/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list


*/