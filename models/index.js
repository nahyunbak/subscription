const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const Submit = require("./submit");
const Step = require("./step");
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Submit = Submit;
db.Step = Step;

Submit.init(sequelize);
Step.init(sequelize);

Step.associate(db);
Submit.associate(db);

module.exports = db;
