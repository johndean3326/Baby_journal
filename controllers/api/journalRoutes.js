const router = require('express').Router();
const { Baby, Parents, Journal } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const journalData = await Journal.findAll({
        include: [{
            model: Baby,
            attributes: ["baby_name", "birthday"]
          }]
      });
      res.status(200).json(journalData);
    } catch (err) {
      res.status(500).json(err);
    }
  })

  router.post('/', async (req, res) => {
    try {
        const journalData = await Journal.create({
            id: req.body.id,
            entry: req.body.entry,
            date: req.body.date,
            baby_id: req.body.baby_id
        })
        res.status(200).json(journalData)
    } catch (err) {
        res.status(500).json(err)
    }
  })

  module.exports = router;