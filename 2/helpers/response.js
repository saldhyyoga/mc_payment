exports.success = (data, res) => {
  res.send({
    status: "Success",
    data: data
  })
  res.end();
}

exports.error = (message, res, statusCode) => {
  console.log(message);
  res.status(statusCode || 500).send({
    status: "ERROR",
    message: `${message}`
  });
  res.end();
}