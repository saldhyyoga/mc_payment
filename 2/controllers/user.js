const response = require('../helpers/response');
const userService = require('../services/user');

exports.GetUserData = (req, res) => {
  try {
    const id = req.params.id;
    return userService.GetUserData(id, res);
  } catch (error) {
    response.error(error, res);
  }
}