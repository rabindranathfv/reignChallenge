'use strict';
const axios = require('axios');

const Debug = require('debug');
const _ = require('underscore');

// models
const ArticleModel = require('../models/articles');
const debug = new Debug('backend:service:articles');

//  reference_id: art.objectID,
const createArticles = async(objArticles) => {
    try {
        // console.log(objArticles);
        let { hits } = await objArticles;
        hits.forEach(art => {
            let article = new ArticleModel({
                reference_id: art.objectID,
                title: art.title,
                story_title: art.story_title,
                url: art.url,
                story_url: art.story_url,
                author: art.author,
                created_at: art.created_at,
            });

            ArticleModel.find({ state: true, reference_id: article.reference_id }, 'title story_title reference_id author created_at')
                .exec((err, artLists) => {
                    if (err) {
                        console.error(err);
                    }
                    let art = artLists.shift();
                    if (art.reference_id != article.reference_id) {
                        return article.save((err, artDB) => {
                            if (err) {
                                console.error(err);
                            }
                        });
                    } else {
                        console.log(`duplicated ${article.reference_id}`);
                    }

                });
        });
    } catch (error) {
        console.log(err, `something wrong in create articles`);
    }

};


const getArticlesRemote = async() => {
    let resp = await axios.get(`${process.env.API_URL}`);
    let articles = await {...resp.data };
    createArticles(articles);
};

const getArticles = async(req, res) => {
    // the find condition and count condition must be the same for count in the right way
    ArticleModel.find({ state: true }, 'title story_title url story_url author created_at')
        .sort({ created_at: 'desc' })
        .exec((err, artLists) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: `not article exist`,
                    err
                });
            }
            ArticleModel.countDocuments({ state: true }, (err, numArticles) => {
                res.json({
                    ok: true,
                    message: 'get list of articles successfully',
                    amountArticles: numArticles,
                    articles: artLists
                });
            });
        });

}

const getArticleById = async(req, res, objArt, artId) => {
    ArticleModel.findByIdAndUpdate(artId, objArt, { new: true, runValidators: true, useFindAndModify: 'false' })
        .exec((err, artDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: `the article doesn't exist`,
                    err
                });
            }
            res.json({
                ok: true,
                message: `the article exist`,
                article: artDB
            });
        });
}

const activeArticle = async(req, res, objArt, articleId) => {
    ArticleModel.findByIdAndUpdate(articleId, objArt, { new: true, runValidators: true, context: 'query', useFindAndModify: 'false' }, (err, artDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: `problem with article updated by Id`,
                err
            });
        }
        res.json({
            ok: true,
            message: 'Update status of article sucessfully',
            article: artDB
        });
    });
}

const deleteArticle = async(req, res, objArt, articleId) => {
    ArticleModel.findByIdAndUpdate(articleId, objArt, { new: true, runValidators: true, context: 'query' }, (err, artDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: `problems with article soft delete`,
                err
            });
        }

        if (!artDelete) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Article does not exist'
                }
            });
        }
        res.json({
            ok: true,
            message: 'Update article sucessfully',
            article: artDelete
        });
    });
}

module.exports = {
    getArticles,
    getArticleById,
    getArticlesRemote,
    deleteArticle,
    activeArticle
}