const Sequelize = require("sequelize");

module.exports = class Step extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
          defaultValue: "@",
        },
        step: {
          type: Sequelize.STRING(20),
          allowNull: true,
          defaultValue: "진행중",
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.Now,
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
    db.Step.belongsTo(db.Submit, { foreignKey: "email", targetKey: "email" });
  }
};
