"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     */
    await queryInterface.addColumn("Todos", "status", Sequelize.BOOLEAN);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.removeColumn("Todos", "status", Sequelize.BOOLEAN);
  },
};
// "Todo", "id",
