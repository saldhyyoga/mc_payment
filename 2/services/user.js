const Connection = require('../helpers/database');
const response = require('../helpers/response');

exports.GetUserData = (userId, res) => {
  const sql = "select name, saldo from user where id = ?"
  const params = [userId];
  Connection.get(sql, params, (err, rows) => {
    if (err) {
      return response.error(err, res, 400);
    }
    if(!rows){
      return response.error('user not found', res, 404);
    }
    return response.success(rows, res);
  });
}

exports.CreateUser = (params, res) => {
  const sql = 'INSERT INTO user (name) VALUES (?) ';
  const values = [params.name];
  Connection.run(sql, values, function (err, rows) {
    if(err) {
      console.log(err);
      response.error(err, res, 400);
    }
    return response.success({
      name: params.name,
      id: this.lastID
    }, res);
  })
}