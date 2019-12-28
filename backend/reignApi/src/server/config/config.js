// ############# PORT CONFIGURATION
process.env.PORT = process.env.PORT || 3000;

// ########## Enviroments
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ######## token time
// 60 min
// 60 seg
// 24 hours
// 30 days
// process.env.TIME_TOKEN = 60 * 60 * 24 * 30;
process.env.TIME_TOKEN = "24h";

// ####### SEED AUTH
process.env.SEED = process.env.SEED || 'token-seed-prod';

// ##### API_URL
process.env.API_URL = process.env.API_URL || `http://hn.algolia.com/api/v1/search_by_date?query=nodejs`;

// ###########  BD Config

let urlDB;
let dbName = process.env.DB_NAME || 'reignDB';

if (process.env.NODE_ENV === 'dev') {
    urlDB = `mongodb://localhost:27017/${dbName}`;
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;