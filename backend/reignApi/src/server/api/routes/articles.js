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

// cron.schedule('0 0 */1 * * *', articleCtrl.getArticlesRemote);

app.get('/v1/articles/remote', articleCtrl.getArticlesRemote);

app.get('/v1/articles/:id', articleCtrl.getArticleById);

app.put('/v1/articles/:id', articleCtrl.activeArticle);

app.delete('/v1/articles/:id', articleCtrl.deleteArticle);

module.exports = app;