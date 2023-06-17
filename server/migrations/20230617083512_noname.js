const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "categorie_produits", deps: []
 * createTable() => "Entreprises", deps: []
 * createTable() => "Adresses", deps: [Entreprises, Entreprises]
 * createTable() => "Users", deps: [Entreprises, Entreprises]
 * createTable() => "Cotations", deps: [Users, Users]
 * createTable() => "Clients", deps: [Users, Users]
 * createTable() => "Offres", deps: [Cotations, Cotations]
 * createTable() => "Commandes", deps: [Offres, Offres]
 * createTable() => "depenses", deps: [Users, Users]
 * createTable() => "Commande_clients", deps: [Clients, Commandes]
 * createTable() => "Produits", deps: [categorie_produits, categorie_produits]
 * createTable() => "Stocks", deps: [Users, Produits, Produits, Users]
 * createTable() => "Entrees", deps: [Stocks, Stocks]
 * createTable() => "Sorties", deps: [Stocks, Commandes, Stocks]
 * createTable() => "CotationProduit", deps: [Cotations, Produits]
 * createTable() => "OffreProduit", deps: [Offres, Produits]
 *
 */

const info = {
  revision: 1,
  name: "noname",
  created: "2023-06-17T08:35:12.146Z",
  comment: "",
};

const migrationCommands = (transaction) => [
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
        entrepriseId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Entreprises", key: "id" },
          allowNull: true,
          field: "entrepriseId",
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
        EntrepriseId: {
          type: Sequelize.INTEGER,
          field: "EntrepriseId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Entreprises", key: "id" },
          allowNull: true,
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
          type: Sequelize.ENUM("admin", "seller", "mining"),
          field: "role",
          allowNull: false,
          defaultValue: "admin",
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          unique: true,
          allowNull: false,
        },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          field: "password",
          allowNull: false,
        },
        Tokens: { type: Sequelize.STRING, field: "Tokens", allowNull: true },
        StatusCompt: {
          type: Sequelize.STRING,
          field: "StatusCompt",
          allowNull: true,
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
        EntrepriseId: {
          type: Sequelize.INTEGER,
          field: "EntrepriseId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Entreprises", key: "id" },
          allowNull: true,
        },
        entrepriseId: {
          type: Sequelize.INTEGER,
          field: "entrepriseId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Entreprises", key: "id" },
          allowNull: true,
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
        userId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "userId",
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
        UserId: {
          type: Sequelize.INTEGER,
          field: "UserId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Users", key: "id" },
          allowNull: true,
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
        userId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "userId",
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
        UserId: {
          type: Sequelize.INTEGER,
          field: "UserId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Users", key: "id" },
          allowNull: true,
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
        cotationId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Cotations", key: "id" },
          allowNull: true,
          field: "cotationId",
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
        CotationId: {
          type: Sequelize.INTEGER,
          field: "CotationId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Cotations", key: "id" },
          allowNull: true,
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
        OffresId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Offres", key: "id" },
          allowNull: true,
          field: "OffresId",
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
        OffreId: {
          type: Sequelize.INTEGER,
          field: "OffreId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Offres", key: "id" },
          allowNull: true,
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
        userId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "userId",
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
        UserId: {
          type: Sequelize.INTEGER,
          field: "UserId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Users", key: "id" },
          allowNull: true,
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
        ClientId: {
          type: Sequelize.INTEGER,
          field: "ClientId",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Clients", key: "id" },
          primaryKey: true,
        },
        CommandeId: {
          type: Sequelize.INTEGER,
          field: "CommandeId",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Commandes", key: "id" },
          primaryKey: true,
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
          onDelete: "NO ACTION",
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
        categorieProduitId: {
          type: Sequelize.INTEGER,
          field: "categorieProduitId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "categorie_produits", key: "id" },
          allowNull: true,
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
        userId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Users", key: "id" },
          allowNull: true,
          field: "userId",
        },
        produitId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Produits", key: "id" },
          allowNull: true,
          field: "produitId",
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
        ProduitId: {
          type: Sequelize.INTEGER,
          field: "ProduitId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Produits", key: "id" },
          allowNull: true,
        },
        UserId: {
          type: Sequelize.INTEGER,
          field: "UserId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Users", key: "id" },
          allowNull: true,
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
        stockId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Stocks", key: "id" },
          allowNull: true,
          field: "stockId",
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
        StockId: {
          type: Sequelize.INTEGER,
          field: "StockId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Stocks", key: "id" },
          allowNull: true,
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
        stockId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "Stocks", key: "id" },
          allowNull: true,
          field: "stockId",
        },
        CommandeId: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Commandes", key: "id" },
          allowNull: true,
          field: "CommandeId",
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
        StockId: {
          type: Sequelize.INTEGER,
          field: "StockId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "Stocks", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "CotationProduit",
      {
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
        CotationId: {
          type: Sequelize.INTEGER,
          field: "CotationId",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Cotations", key: "id" },
          primaryKey: true,
        },
        ProduitId: {
          type: Sequelize.INTEGER,
          field: "ProduitId",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Produits", key: "id" },
          primaryKey: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "OffreProduit",
      {
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
        OffreId: {
          type: Sequelize.INTEGER,
          field: "OffreId",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Offres", key: "id" },
          primaryKey: true,
        },
        ProduitId: {
          type: Sequelize.INTEGER,
          field: "ProduitId",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "Produits", key: "id" },
          primaryKey: true,
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
  {
    fn: "dropTable",
    params: ["CotationProduit", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["OffreProduit", { transaction }],
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
