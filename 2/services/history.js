const Connection = require('../helpers/database');
const response = require('../helpers/response');

exports.GetHistory = (params, res) => {
  let paramSql = [];
  let sql = '';
  paramSql.push(parseInt(params.user_id));
  if (params.type !== null) {
    sql+= `select * from history WHERE user_id = ? and type = ?`;
    paramSql.push(params.type);
  } else {
    sql = `select * from history WHERE user_id = ?`;
  }

  Connection.all(sql, paramSql, (err, rows) => {
    if (err) {
      response.error(err, res, 400);
    }
    return response.success(rows, res);
  });
}