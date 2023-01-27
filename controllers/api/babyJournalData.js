const router = require('express').Router();
const { Baby } = require('../../models');

// Get all baby data
router.get('/', async (req, res) => {
    try {
      const babyData = await babyData.findAll({
        include: [{ model: Baby }],
      });
      res.status(200).json(babyData);
    } catch (err) {
      res.status(500).json(err);
    }
  })