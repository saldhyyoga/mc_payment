const CreateTableUser = `CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name text unique,
  saldo DECIMAL(15, 2) DEFAULT 0,
  created_at DATETIME DEFAULT (datetime('now', 'localtime')),
  updated_at DATETIME DEFAULT (datetime('now', 'localtime'))
);`;

const InsertUser = `INSERT INTO user (id, name, saldo, created_at, updated_at) 
VALUES (1, 'Steven' , 0, DateTime('now'), DateTime('now'));`;

const CreateTypeHistory = `CREATE TABLE type_history (
  name text PRIMARYKEY
);
INSERT INTO type_history VALUES ('income');
INSERT INTO type_history VALUES ('expenses');`

const CreateTableHistory = `CREATE TABLE history (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INT,
  type TEXT,
  amount DECIMAL(15, 2),
  description TEXT,
  created_at DATETIME DEFAULT (datetime('now', 'localtime')),
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY(type) REFERENCES type_history(name)
)`;

// const InsertIncome = `
// INSERT INTO history VALUES (1, 'income', 100000, 'uang harian', DateTime('now'));
// INSERT INTO history VALUES (1, 'expenses', 50000, 'beli makan', DateTime('now'));
// `;

// const UpdateSaldo = `
// UPDATE user SET saldo = ?
// `

module.exports = {
  CreateTableUser,
  CreateTableHistory,
  CreateTypeHistory,
  InsertUser
}