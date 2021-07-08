const Sequelize = require("sequelize");

module.exports = class Submit extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(15),
          allowNull: false,
          defaultValue: "-",
        },
        company: {
          type: Sequelize.STRING(30),
          allowNull: false,
          defaultValue: "-",
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
          defaultValue: "-",
        },
        phone: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        detail: {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue: "-",
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Submit",
        tableName: "submits",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Submit.belongsTo(db.Step, { foreignKey: "email", sourceKey: "email" });
  }
};
