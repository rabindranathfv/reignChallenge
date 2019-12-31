'use stric';

const path = require('path');
const dotenv = require('dotenv');

console.log('load node process env', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'dev') {
    console.log('running dev');
    dotenv.config({ path: path.join(__dirname, './.env') });
    // ######## token time
    // process.env.TIME_TOKEN = "24h";
    // ###########  BD Config
    process.env.URLDB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
} else if (process.env.NODE_ENV === 'staging') {
    console.log('running staging');
    console.log(path.join(__dirname, './.env.staging'));
    dotenv.config({ path: path.join(__dirname, './.env.staging') });
    // ###########  BD Config
    process.env.URLDB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
} else {
    console.log('running production');
    console.log(path.join(__dirname, './.env.prod'));
    dotenv.config({ path: path.join(__dirname, './.env.prod') });
    // ###########  BD Config
    process.env.URLDB = process.env.MONGO_URI ? process.env.MONGO_URI : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}