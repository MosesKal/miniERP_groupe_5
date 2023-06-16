const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(role) => "Users"
 * changeColumn(email) => "Users"
 * changeColumn(telephone) => "Users"
 * changeColumn(Tokens) => "Users"
 *
 */

const info = {
  revision: 6,
  name: "noname",
  created: "2023-06-16T20:34:44.210Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "Users",
      "role",
      {
        type: Sequelize.ENUM("admin", "seller", "mining"),
        field: "role",
        allowNull: false,
        defaultValue: "admin",
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Users",
      "email",
      {
        type: Sequelize.STRING,
        field: "email",
        unique: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Users",
      "telephone",
      {
        type: Sequelize.STRING,
        field: "telephone",
        unique: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Users",
      "Tokens",
      { type: Sequelize.STRING, field: "Tokens", allowNull: true },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "Users",
      "role",
      {
        type: Sequelize.ENUM("admin", "seler", "mining"),
        field: "role",
        defaultValue: "admin",
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Users",
      "email",
      { type: Sequelize.STRING, field: "email", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Users",
      "telephone",
      { type: Sequelize.STRING, field: "telephone", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "Users",
      "Tokens",
      {
        type: Sequelize.STRING,
        field: "Tokens",
        defaultValue: "test",
        allowNull: true,
      },
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
