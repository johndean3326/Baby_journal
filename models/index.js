const User = require('./User');
const Baby = require('./Baby');
const Parents = require('./Parents');
const Journal = require(`./Journal`);

Baby.hasOne(Journal,{foreignKey: "baby_id"});
Journal.belongsTo(Baby, {foreignKey: "baby_id"});

Parents.hasMany(Baby,{foreignKey: "parent_id"});
Baby.belongsTo(Parents, {foreignKey: "parent_id"});

User.hasOne(Parents, {foreignKey: "user_id"});
Parents.belongsTo(User, {foreignKey: "user_id"});


module.exports = { User, Baby, Parents, Journal };
