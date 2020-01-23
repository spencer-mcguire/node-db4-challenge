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

module.exports = router;
