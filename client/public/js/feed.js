document.getElementById('portal_button').addEventListener('click', event => {
    goToLocation('https://my.marist.edu/'); 
})

let feedItem = {
    Title: 'News from Marist',
    Body: 'Get the latest Marist news here',
    linkUrl: 'https://www.maristcircle.com', 
    imageUrl: '/images/news_pic.jpg'
}

let feedItem2 = {
    Title: 'Dante Segovia is boxing Greg Mayer',
    Body: 'On July 15th, 2023, Greg Mayer is boxing Dante Segovia at Gregs grandmothers house.',
    linkUrl: 'https://en.wikipedia.org/wiki/Boxing', 
    imageUrl: '/images/me.jpeg'
}

let feedItem3 = {
    Title: 'Newburgh offers free Marist program',
    Body: 'NECSD is offering students a chance to get one full year free from college.',
    linkUrl: 'https://www.newburghschools.org/', 
    imageUrl: '/images/you.jpeg'
}

var currentStories = [feedItem, feedItem2, feedItem3]

window.addEventListener("load", () => {
    for(var i=0; i < currentStories.length; i++){
        displayFeed(currentStories[i]);
}})

function displayFeed(currentStories){
    let feed = document.getElementById('newsfeed');
    feed.innerHTML += "<span><img class='myImage' src ='"+ currentStories.imageUrl +"'>" +"</span";
    feed.innerHTML += "<span><h2><a href'" + currentStories.imageUrl +"'>" + currentStories.Title + "</a>"
    feed.innerHTML += "<p>" + currentStories.Body + "</p>";
    feed.innerHTML += "<hr /"

}