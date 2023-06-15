const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(categorieId) => "Produits"
 * changeColumn(categorieId) => "Produits"
 *
 */

const info = {
  revision: 5,
  name: "noname",
  created: "2023-06-15T21:47:38.412Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "Produits",
      "categorieId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "categorie_produits", key: "id" },
        allowNull: true,
        field: "categorieId",
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Produits",
      "categorieId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "categorie_produits", key: "id" },
        allowNull: true,
        field: "categorieId",
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "Produits",
      "categorieId",
      { type: Sequelize.INTEGER, field: "categorieId" },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Produits",
      "categorieId",
      { type: Sequelize.INTEGER, field: "categorieId" },
      { transaction },
    ],
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
