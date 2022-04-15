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

exports.CreateUser = (req, res) => {
  try {
    const params = req.body;
    if (!params.name) {
      response.error('name is required', res, 400);
    }
    return userService.CreateUser(params, res);
  } catch (error) {
    response.error(error, res);
  }
}