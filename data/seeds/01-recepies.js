exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {
      recipe_name: 'Hamburger',
      steps:
        'In a sem tincidunt, feugiat urna non, gravida tellus. Quisque vulputate dapibus odio, sit amet varius neque vehicula id. Suspendisse dictum lacus risus, non porttitor elit ornare sed. Mauris pulvinar dictum orci, in ultricies libero maximus ut. Etiam eget augue non turpis mollis pulvinar. Quisque vestibulum libero pellentesque, convallis augue quis, vestibulum sapien. Integer et eleifend dolor, ut eleifend turpis.'
    },
    {
      recipe_name: 'Eggs',
      steps:
        'In a sem tincidunt, feugiat urna non, gravida tellus. Quisque vulputate dapibus odio, sit amet varius neque vehicula id. Suspendisse dictum lacus risus, non porttitor elit ornare sed. Mauris pulvinar dictum orci, in ultricies libero maximus ut. Etiam eget augue non turpis mollis pulvinar. Quisque vestibulum libero pellentesque, convallis augue quis, vestibulum sapien. Integer et eleifend dolor, ut eleifend turpis.'
    }
  ]);
};
