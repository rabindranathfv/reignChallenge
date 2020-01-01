# Reign Challenge

+ always use camelCase
+ Follow ES6+ Javascript standards

### Information Important

1. [Project structure](#projectstructure)
2. [Frontend](#frontend)
3. [Backend](#backend)
4. [backend-config](#backend-config)
5. [populate-db](#populate-db)
6. [dockerized](#dockerized)
7. [runing-apps](#runing-apps)
8. [Enviroments frontend](#enviroments)


## Project Structure
<a name="projectstructure"/>

The structure of this project defined by folders with specific purpose

```
.
├── ...
├── reignChallenge                 # mean fullstack project
│   ├── backend                     # Folder API REST Express
│   ├── frontned                    # Folder Ang App frontend
│   ├── docker-compose.yml 
│   ├── gitignore
│   ├── gitlab
│   ├── package.json
└──...
```

## Frontend
<a name="frontend"/>

The structure of this project defined by folders with specific purpose

```
.
├── ...
├── frontend                      # angular application
│   ├── reignApp                     # e2e test
│   │   ├── e2e                     # e2e test
│   │   ├── src                     # Main files of ang app
│   │      ├── app                  
│   │         ├── components        # all components with their own module for easy import
│   │           ├── share-components       # all share components
│   │         ├── pipes             # Pipe Module
│   │         ├── interfaces        # all interfaces define by part you need, models 
│   │         ├── services          # Service request for API or Severals APIs
│   │      ├── assets               # Assets include imgs, css, icons, img and most import i18n en.json, es.json 
│   │      ├── enviroments          # settings for dev, stagging and productions for API, and multistage build
│   │   ├── Dockerfile              # frontend docker file
│   │   ├── nginx.custom.conf       # nginx config for dockerfile (only in prod, staging branches)
│   │   ├── angular.json
│   │   └── ...                     # etc.
└──...
```

## Backend
<a name="backend"/>

The structure of this project defined by folders with specific purpose

```
.
├── ...
├── backend                     # Express API Rest 
│   ├── reignApi                     # e2e test
│      ├── src                  
│         ├── server        # all components with their own module for easy import 
│         ├── Dockerfile        # api express dockerfile
│           ├── api             # midlewware and endpoint routes
│           ├── assets          # defaul imgs for backend, and more
│           ├── config          # headers, config load .env files for dev, staging and production config 
│           ├── controllers     # controllers 
│           ├── models          # mongo database models  
│           ├── services        # logic bussiness 
│           ├── test            # test for backend 
│           ├── utils           # utils functions, methods 
│           ├── server.js       # api express core 
│   └── ...                     # etc.
└──...
```

## Backend-config
<a name="backend-config"/>
for backend you must config at least one .env files, this API supports 3 enviroments files (.env, .env.stagin and .env.prod). You have a .env-sample config and looks in this way

```
NODE_ENV=dev
DB_HOST=localhost
HOST=localhost
PORT=3000
DB_NAME=someDB
DB_PORT=27017
SEED=security-seed
API_URL=http://hn.algolia.com/api/v1/search_by_date?query=nodejs
URLDB=test
TIME_TOKEN=12h
```

the definition of each file in env file:

`NODE_ENV` defines type of enviroments, can be dev/staging/prod
`DB_HOST` host for database
`HOST` host for API
`PORT` por for API
`DB_NAME` database name
`DB_PORT` define mongo db port
`SEED`seed for token generation, security practice 
`API_URL` add url -->http://hn.algolia.com/api/v1/search_by_date?query=nodejs
`URLDB`url for database, this is created with db_host, db_port and db_name inside config.js
`TIME_TOKEN` time for token expiration
`MONGO_URI`

and example for Development config you can use

```
NODE_ENV=dev
DB_HOST=localhost
HOST=localhost
PORT=3000
DB_NAME=reignDB
DB_PORT=27017
SEED=token-seed-dev
API_URL=http://hn.algolia.com/api/v1/search_by_date?query=nodejs
URLDB=test
TIME_TOKEN=24h
```
for the rest of states as production and staging change NODE_ENV, DB_NAME, PORT (IF YOU NEED), and add MONGO_URI just if you want to use mongo atlas cluster


## populate-db
<a name="populate-db"/>

if you want to populate db without wait for the cronjob execute you can use this endpoint --> `/v1/articles/remote` in postman or in broswer

```javascript
'use stric';
const express = require('express');
const articleCtrl = require('../../controllers/articles.ctrl');
const cron = require('node-cron');
const { checkToken } = require('../middleware/auth');

const app = express();

/* middlewares

1.-checkToken

*/

app.get('/v1/articles', articleCtrl.getArticles);

cron.schedule('0 0 */1 * * *', articleCtrl.getArticlesRemote);

app.get('/v1/articles/remote', articleCtrl.getArticlesRemote);

app.get('/v1/articles/:id', articleCtrl.getArticleById);

app.put('/v1/articles/:id', articleCtrl.activeArticle);

app.delete('/v1/articles/:id', articleCtrl.deleteArticle);

module.exports = app;

```

## dockerized
<a name="dockerized"/>

You can run all app using `docker-compose up --build`, follow the same method in populate-db. 

!Important if you have mongodb running in your local you must stop the mongod service, if you don't the docker-compose up is going to fail because i use the same port in docker-compose config as in local

## running apps
<a name="runing-apps"/>
you can use docker-compose to run de apps or not! if you want just development without dockers you can go inside based folder of frontend 
(/frontend/reignApp/) and run `npm run start-container`. if you need more check package.json file. backend (/reignApi/src) and run `npm run start-dev` or `npm start` (the firts one use nodemon for execute server.js).

+ Pluss
    if have all you .env files config you can use too `npm run start-staging` for running API with staging config, or `npm run start-prod` for running API with prod settings. 
    i considerer this usefull because you can set up MONGO_URI for 2 diferrents DB using the same API Version

for more check package.json inside backend folder.


## Enviroments frontend
<a name="enviroments"/>

We define 3 files for this: production, staging and Dev.


```javascript
export const environment = {
  production: true,
  url: 'http://localhost:3000/v1/',
};
```

Production for build you are going to use this file `./build_staging.sh`

```javascript
export const environment = {
    production: true,
    environmentName: 'staging',
    url: 'http://localhost:3000/v1/',
};
```
