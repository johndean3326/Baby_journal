const router = require('express').Router();
const { Baby, Parents } = require('../../models');

// Get all baby data
router.get('/', async (req, res) => {
    try {
      const babyData = await Baby.findAll({
        attributes:[
          'id', 'baby_name', 'milestone', 'birthday', 'first_word', 'eye_color', 
        ]
      });
      res.status(200).json(babyData);
    } catch (err) {
      res.status(500).json(err);
    }
  })

  // create new baby data
router.post('/', async (req, res) => {
  try {
      const babyData = await Baby.create({
          baby_name: req.body.baby_name, 
          // birthday: req.body.birthday,
          eye_color: req.body.eye_color
      })
      res.status(200).json(babyData)
  } catch (err) {
      res.status(500).json(err)
  }
})



  module.exports = router;