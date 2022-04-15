const Connection = require('../helpers/database');
const sqlquery = require('../helpers/sql');
const response = require('../helpers/response');

exports.setupDatabase = async (req, res) => {
  try {
    Connection.run(sqlquery.CreateTableUser, err => {
      if (err) {
        console.log(err.message);
        throw err.message;
      }
      Connection.run(sqlquery.InsertUser, err => {
        if (err) {
          console.log(err.message);
          throw err.message;
        }
        console.log('user inserted');
        Connection.get(`SELECT * FROM user`, (err, row) =>{
          if(err){
            console.log(err)
          }
          console.log(row);
        });
      });

      Connection.run(sqlquery.InsertIncome, err => {
        if (err) {
          console.log(err.message);
          throw err.message;
        }
        console.log('income inserted');
      });
      Connection.run(sqlquery.InsertExpenses, err => {
        if (err) {
          console.log(err.message);
          throw err.message;
        }
        console.log('expenses inserted');
        Connection.run(sqlquery.UpdateSaldo, err => {
          if (err) {
            console.log(err.message);
            throw err.message;
          }
          console.log('update saldo');
        })
      });
    });

    Connection.run(sqlquery.CreateTableHistory, err => {
      if (err) {
        console.log(err.message);
        throw err.message;
      }
      console.log('table history created');
    });

    Connection.run(sqlquery.CreateTypeHistory, err => {
      if (err) {
        console.log(err.message);
        throw err.message;
      }
      console.log('table type_history created');
    });

    response.success('initial setup database success', res);
  } catch (error) {
    console.log(error);
    response.error(error, res);
  }
}