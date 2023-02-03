const sequelize = require('../config/connection');
const { User, Baby, Parents, Journal } = require('../models');

const userData = require('./userData.json');

const babyData = require('./babyData.json');

const parentData = require('./parentData.json');

const journalData = require('./journalData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
   
  console.log("creating baby seeds")
  await Parents.bulkCreate(parentData)
  console.log("created parent seeds")
  await Baby.bulkCreate(babyData)
  console.log("created baby seeds")
  await Journal.bulkCreate(journalData)
  console.log("created journal seeds")



  process.exit(0);
};

seedDatabase();
