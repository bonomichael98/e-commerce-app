const { Tag } = require('../models');

const tagData = [
  {
    name_tag: 'rock music',
  },
  {
    name_tag: 'pop music',
  },
  {
    name_tag: 'blue',
  },
  {
    name_tag: 'red',
  },
  {
    name_tag: 'green',
  },
  {
    name_tag: 'white',
  },
  {
    name_tag: 'gold',
  },
  {
    name_tag: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
