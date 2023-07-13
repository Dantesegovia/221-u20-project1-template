function feedItem(Title, Body, linkUrl, imageUrl){
    this.Title = Title;
    this.Body = Body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

//constructor made accessable bu using exports
exports.createfeedItem = function createfeedItem(Title, Body, linkUrl, imageUrl){
    return new feedItem(Title, Body, linkUrl, imageUrl);
};