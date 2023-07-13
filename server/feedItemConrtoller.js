//make available user model
const feedItem = require('../model/feedItem')

var feedItems = [];
var feedItem1 = feedItem.createfeedItem("News from Marist", 'Get the latest Marist news here', 'https://www.maristcircle.com', '/images/news_pic.jpg');
var feedItem2 = feedItem.createfeedItem('Dante Segovia is boxing Greg Mayer', 'On July 15th, 2023, Greg Mayer is boxing Dante Segovia at Gregs grandmothers house.', 'https://en.wikipedia.org/wiki/Boxing', '/images/me.jpeg'); 
var feedItem3 = feedItem.createfeedItem('Newburgh offers free Marist program', 'NECSD is offering students a chance to get one full year free from college.', 'https://www.newburghschools.org/', '/images/you.jpeg');
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

exports.getfeedItems = function(req, res) {
    res.setHeader('Content-Type', 'applicaiton/json');
    res.send(JSON.stringify(feedItems));
}

exports.savefeedItem = function(req, res){
    let newfeedItem = feedItem.createfeedItem(req.body.Title, req.body.Body, req.body.linkUrl, req.body.imageUrl);
    feedItems.push(newfeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(feedItems));
}

exports.getfeedItem = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems[req.params.feedItemID]);
}

exports.deletefeedItem = function(req, res){
    feedItems.splice(req.params.feedItemID, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
}

exports.updatefeedItem = function (req, res){
    var updatedfeedItem = feedItems[req.params.feedItemID];
    if(req.body.Title) 
        updatedfeedItem.Title = req.body.Title;
    if (req.body.Body)
        updatedfeedItem.Body = req.body.Body;
    if (req.body.linkUrl)
        updatedfeedItem.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedfeedItem.imageUrl = req.body.imageUrl;

    feedItems[req.params.feedItemID] = updatedfeedItem;

    res.setHeader('Content-Type', 'applicaiton/json');
    res.send(feedItems[req.params.feedItemID]);
}