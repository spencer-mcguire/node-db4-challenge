const express = require('express');

const Recipes = require('../../data/helpers/recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      if (recipes) {
        res.json(recipes);
      } else {
        res.status(404).json({ error_message: 'No recipes found.' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting recipes' });
    });
});

router.get('/:id/shoppinglist', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(list => {
      if (list) {
        res.json(list);
      } else {
        res.status(404).json({ error_message: 'No ingredients found.' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting shopping list' });
    });
});

router.get('/:id/instructions', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(steps => res.json(steps))
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting shopping list' });
    });
});

module.exports = router;
