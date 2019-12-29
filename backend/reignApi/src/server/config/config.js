'use stric'

const path = require('path');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'dev') {
    console.log('running dev');
    console.log(path.join(__dirname, './.env'));
    dotenv.config({ path: path.join(__dirname, './config/.env') });
    console.log(process.env.NODE_ENV);
    console.log(process.env.DB_HOST);
    console.log(process.env.HOST);
    console.log(process.env.PORT);
    console.log(process.env.DB_NAME);
    console.log(process.env.DB_PORT);
    console.log(process.env.SEED);
    console.log(process.env.API_URL);
    console.log(process.env.URLDB);
    console.log(process.env.TIME_TOKEN);

    // ######## token time
    // 60 min
    // 60 seg
    // 24 hours
    // 30 days
    // process.env.TIME_TOKEN = "24h";

    // ###########  BD Config
    process.env.URLDB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
} else if (process.env.NODE_ENV === 'staging') {
    console.log('running staging');
    console.log(path.join(__dirname, './.env.staging'));
    dotenv.config({ path: path.join(__dirname, './.env.staging') });
    console.log(process.env.NODE_ENV);
    console.log(process.env.DB_HOST);
    console.log(process.env.HOST);
    console.log(process.env.PORT);
    console.log(process.env.DB_NAME);
    console.log(process.env.DB_PORT);
    console.log(process.env.SEED);
    console.log(process.env.API_URL);
    console.log(process.env.URLDB);
    console.log(process.env.TIME_TOKEN);
    process.env.URLDB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
} else {
    console.log('running production');
    console.log(path.join(__dirname, './.env.prod'));
    dotenv.config({ path: path.join(__dirname, './.env.prod') });
    console.log(process.env.NODE_ENV);
    console.log(process.env.DB_HOST);
    console.log(process.env.HOST);
    console.log(process.env.PORT);
    console.log(process.env.DB_NAME);
    console.log(process.env.DB_PORT);
    console.log(process.env.SEED);
    console.log(process.env.API_URL);
    console.log(process.env.URLDB);
    console.log(process.env.TIME_TOKEN);
    process.env.URLDB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}