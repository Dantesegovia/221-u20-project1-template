const express = require('express');
const router = express.Router();

const feedItemController = require('../controller/feedItemController');

router.route('/api/feedItems')
    .get( (req, res) => {
        feedItemController.getfeedItems(req, res);
    })
    .post( (req, res) => {
        feedItemController.savefeedItem(req, res);
    })

router.route('/api/feedItems/:feedItemID')
    .get( (req, res) => {
        feedItemController.getfeedItem (req, res);
    })
    .delete( (req, res) => {
        feedItemController.deletefeedItem (req, res);
    })
    .patch((req, res) => {
        feedItemController.updatefeedItem (req, res);
    })

module.exports = router;