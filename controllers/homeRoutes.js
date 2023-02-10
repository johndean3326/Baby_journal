const router = require('express').Router();
const { User , Baby, Journal, Parents } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {id: req.session.user_id},
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const user = userData.get({plain: true})
    
      const parentData = await Parents.findOne({where: {user_id: user.id}})
      if (parentData == null) {
        res.render("parentRegister", {user})
      } else { 
        const babyData = await Baby.findOne({where: {parent_id: parentData.id}})
        if (babyData == null) {
          console.log(parentData.id);
          res.render("babyRegister", {parent: parentData.id})
        } else {
        const journalData = await Journal.findAll({where: {baby_id: babyData.id}})
        //const babyData = await Baby.findOne({where: {}})
        const entries = journalData.map((project) => project.get({plain: true}))
        res.render('homepage', {
        // users,

        user: user, baby: babyData.get({plain: true}), entries: entries,
        logged_in: req.session.logged_in,
      });
     }
    }
    } catch (err) {
        res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/register", (req, res) => {
  res.render("register")
})

module.exports = router;
