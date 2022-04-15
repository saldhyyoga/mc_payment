const CreateTableUser = `CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name text UNIQUE,
  saldo DECIMAL(15, 2),
  created_at DATETIME,
  updated_at DATETIME
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
  type text,
  amount DECIMAL(15, 2),
  created_at DATETIME,
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY(type) REFERENCES type_history(name)
)`;

module.exports = {
  CreateTableUser,
  CreateTableHistory,
  CreateTypeHistory,
  InsertUser
}