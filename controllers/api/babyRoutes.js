const router = require('express').Router();
const { Baby, Parents, User, Journal} = require('../../models');

// Get all baby data
router.get('/', async (req, res) => {
    try {
      const babyData = await Baby.findAll({
        attributes: [ "id", "baby_name" , "birthday", "eye_color" ],
        include: [{
          model: Parents,
          attributes: ["parents_name", "father_age", "date"],
          include: [{
            model: User,
            attributes: ["name", "email"]
          }]
        }] , 
        include: [{
          model: Journal,
          attributes: ["entry", "date"]
        }]
      });
      res.status(200).json(babyData);
    } catch (err) {
      res.status(500).json(err);
    }
  })
  router.get('/:id', async (req, res) => {
    try {
      const babyData = await Baby.findAll({
        where: {id: req.params.id},
        attributes: [ "id", "baby_name" , "birthday", "eye_color" ],
        include: [{
          model: Parents,
          attributes: ["parents_name", "father_age", "date"],
          include: [{
            model: User,
            attributes: ["name", "email"]
          }]
        }] , 
        include: [{
          model: Journal,
          attributes: ["entry", "date"]
      }]
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
          id: req.body.id,
          baby_name: req.body.baby_name, 
          birthday: req.body.birthday,
          eye_color: req.body.eye_color
      })
      res.status(200).json(babyData)
  } catch (err) {
      res.status(500).json(err)
  }
})



  module.exports = router;