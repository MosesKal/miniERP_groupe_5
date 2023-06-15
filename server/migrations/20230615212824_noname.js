const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "Adresses", deps: []
 * createTable() => "categorie_produits", deps: []
 * createTable() => "Clients", deps: []
 * createTable() => "Commandes", deps: []
 * createTable() => "Commande_clients", deps: []
 * createTable() => "Cotations", deps: []
 * createTable() => "depenses", deps: []
 * createTable() => "Entrees", deps: []
 * createTable() => "Entreprises", deps: []
 * createTable() => "Offres", deps: []
 * createTable() => "Sorties", deps: []
 * createTable() => "Stocks", deps: []
 * createTable() => "Users", deps: []
 * createTable() => "Produits", deps: [categorie_produits]
 *
 */

const info = {
  revision: 1,
  name: "noname",
  created: "2023-06-15T21:28:24.534Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "Adresses",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        province: { type: Sequelize.STRING, field: "province" },
        ville: { type: Sequelize.STRING, field: "ville" },
        avenue: { type: Sequelize.STRING, field: "avenue" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "categorie_produits",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nom_categorie: { type: Sequelize.STRING, field: "nom_categorie" },
        illustration_categorie: {
          type: Sequelize.STRING,
          field: "illustration_categorie",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Clients",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nom_client: { type: Sequelize.STRING, field: "nom_client" },
        phone_client: { type: Sequelize.STRING, field: "phone_client" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Commandes",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        date: { type: Sequelize.STRING, field: "date" },
        stus: { type: Sequelize.STRING, field: "stus" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Commande_clients",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        qty_commande: { type: Sequelize.STRING, field: "qty_commande" },
        price_commande: { type: Sequelize.FLOAT, field: "price_commande" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Cotations",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        date: { type: Sequelize.STRING, field: "date" },
        description: { type: Sequelize.STRING, field: "description" },
        status: { type: Sequelize.STRING, field: "status" },
        duree_de_validation: {
          type: Sequelize.STRING,
          field: "duree_de_validation",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "depenses",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        montant: { type: Sequelize.STRING, field: "montant" },
        illustration_categorie: {
          type: Sequelize.STRING,
          field: "illustration_categorie",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Entrees",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        qty: { type: Sequelize.STRING, field: "qty" },
        prix: { type: Sequelize.STRING, field: "prix" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Entreprises",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        logoEntreprise: { type: Sequelize.STRING, field: "logoEntreprise" },
        nomEntreprise: { type: Sequelize.STRING, field: "nomEntreprise" },
        descriptionEntreprise: {
          type: Sequelize.STRING,
          field: "descriptionEntreprise",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Offres",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        total: { type: Sequelize.FLOAT, field: "total" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Sorties",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        qty: { type: Sequelize.STRING, field: "qty" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Stocks",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        stock: { type: Sequelize.INTEGER, field: "stock" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Users",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        prenom: { type: Sequelize.STRING, field: "prenom", allowNull: false },
        nom: { type: Sequelize.STRING, field: "nom", allowNull: false },
        role: {
          type: Sequelize.ENUM("admin", "seler", "mining"),
          field: "role",
          defaultValue: "admin",
        },
        email: { type: Sequelize.STRING, field: "email", allowNull: false },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          field: "password",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "Produits",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        sku: { type: Sequelize.STRING, field: "sku" },
        date: { type: Sequelize.STRING, field: "date" },
        statut: { type: Sequelize.STRING, field: "statut" },
        photo: { type: Sequelize.TEXT, field: "photo" },
        categorieId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "categorie_produits", key: "id" },
          allowNull: true,
          field: "categorieId",
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["Adresses", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categorie_produits", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Clients", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Commandes", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Commande_clients", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Cotations", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["depenses", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Entrees", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Entreprises", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Offres", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Produits", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Sorties", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Stocks", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["Users", { transaction }],
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
