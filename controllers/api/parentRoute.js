const router = require('express').Router();
const { Baby, Parents } = require('../../models');

// Get all parent data
router.get('/', async (req, res) => {
    try {
      const parentsData = await Parents.findAll({
        attributes:[
          'id', 'date', 'title', 'parents_names', 'father_age', 'mother_age', 'grandfather', 'grandmother'
        ]
      });
      res.status(200).json(parentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  })

  module.exports = router;


module.exports = router;