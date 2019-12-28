'use stric';
const articleService = require('../services/articles.service');
const _ = require('underscore');

const Debug = require('debug');
const debug = new Debug('backend:controller:articles');


const getArticles = async(req, res) => {
    const articles = await articleService.getArticles(req, res);
}

const getArticlesRemote = async(req, res) => {
    const articles = await articleService.getArticlesRemote(req, res);
}

const getArticleById = async(req, res) => {
    const id = req.params.id;
    let body = req.body;
    const art = await articleService.getArticleById(req, res, body, id);
}

const activeArticle = async(req, res) => {
    const id = req.params.id;
    req.body.state = true;
    let body = _.pick(req.body, ['state']);
    const updArt = await articleService.activeArticle(req, res, body, id);
}

const deleteArticle = async(req, res) => {
    const id = req.params.id;
    req.body.state = false;
    let body = _.pick(req.body, ['state']);
    await articleService.deleteArticle(req, res, body, id);
}

module.exports = {
    getArticles,
    getArticlesRemote,
    getArticleById,
    deleteArticle,
    activeArticle
}