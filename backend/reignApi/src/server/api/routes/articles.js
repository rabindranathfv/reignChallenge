'use stric';
const express = require('express');
const articleCtrl = require('../../controllers/articles.ctrl');
const cron = require('node-cron');
const { checkToken } = require('../middleware/auth');

const app = express();

/* middlewares

1.-checkToken

*/

app.get('/articles', articleCtrl.getArticles);

// cron.schedule('00 59 * * * *', articleCtrl.getArticlesRemote);
cron.schedule('0 0 */1 * * *', articleCtrl.getArticlesRemote);

app.get('/articles/remote', articleCtrl.getArticlesRemote);

app.get('/articles/:id', articleCtrl.getArticleById);

app.put('/articles/:id', articleCtrl.activeArticle);

app.delete('/articles/:id', articleCtrl.deleteArticle);

module.exports = app;