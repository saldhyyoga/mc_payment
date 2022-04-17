const express = require('express');
const app = express();
const PORT = 3000;
const indexRouter = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter)

app.listen(3000, () => console.log(`Listening on port ${PORT}`))

module.exports = app;
