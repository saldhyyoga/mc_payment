const Connection = require('../helpers/database');
const response = require('../helpers/response');

exports.GetHistory = (params, res) => {
  if (!params.user_id) {
    response.error('parameter user_id required', res, 400);
  }
  let sql = `select * from history`;
  if (params.type) {
    sql+= ' where type = ?'
  };
  const paramSql = [params.type];
  Connection.all(sql, paramSql, (err, rows) => {
    if (err) {
      response.error(err, res, 400);
    }
    return response.success(rows, res);
  });
}