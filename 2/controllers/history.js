const response = require('../helpers/response');
const historyService = require('../services/history');

exports.GetHistory = (req, res) => {
  try {
    const type = req.query.type ? req.query.type : null;
    const user_id = req.query.user_id ? req.query.user_id : null;
    
    if (!user_id) {
      return response.error('parameter user_id required', res, 400);
    }
    return historyService.GetHistory({
      type,
      user_id
    }, res);
  } catch (error) {
    response.error(error, res);
  }
}