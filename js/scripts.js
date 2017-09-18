//module 11.4

function boardGame (title, minimumAge, players, gameTime, price) {
	this.title = title;
	this.minimumAge = minimumAge;
    this.players = players;
    this.gameTime = gameTime;
    this.price = price;
}
boardGame.prototype.printInfo = function() {
    console.log("The board game title is " + this.title + ", minimum age is " + this.minimumAge + " and the number of players is " + this.players + " and the time of game is " + this.gameTime + " minuts " +" and the price is " + this.price + " $.");
}

var fuse = new boardGame ("Fuse", 10, 5, 10, 20);

fuse.printInfo();


var getTitle = prompt('Enter title of game.');
var getMinumumAge = prompt('What is a minimum age?');
var getPlayers = prompt('How many players can play?');
var getGameTime = prompt('How long does the game last?');
var getPrice = prompt('How much does it cost');

var newGame = new boardGame (getTitle, getMinumumAge, getPlayers, getGameTime, getPrice);

newGame.printInfo();