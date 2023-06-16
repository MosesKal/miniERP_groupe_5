const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(OffreId) => "Commandes"
 * addColumn(OffresId) => "Commandes"
 *
 */

const info = {
  revision: 20,
  name: "noname",
  created: "2023-06-16T17:00:53.766Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "Commandes",
      "OffreId",
      {
        type: Sequelize.INTEGER,
        field: "OffreId",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "Offres", key: "id" },
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "Commandes",
      "OffresId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "Offres", key: "id" },
        allowNull: true,
        field: "OffresId",
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["Commandes", "OffreId", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["Commandes", "OffresId", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
