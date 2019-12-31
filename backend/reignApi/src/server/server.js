const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Debug = require('debug');

// parse applicattion /x-www/form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

require('./config/config');
app.use(cors());
app.use(require('./config/headers'));

const debug = new Debug('backend-api:root');
app.use(require('./api/routes/indexRoutes'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, resp) => {
    if (err) console.log(err);
    console.log('DB Connection sucessfully', process.env.URLDB);
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});