/* Array indices */
var BAD = -1;
var NORTH = 0;
var SOUTH = 1;
var EAST = 2;
var WEST = 3;

function Location(_id, _name, _description) {
	this.id = _id;
	this.name = _name;
	this.description = _description;
	/* N, S, E, W */
	this.validMoves = [ BAD, BAD, BAD, BAD ];
	this.visited = false;
	this.items;

	this.toString = function() {
		var message = "Location: " + this.name + "\n\n" + this.description;
		return (message);
	}

	this.visit = function() {
		playerLocation = this.id;
		if (this.visited === false) {
			this.visited = true;
			score += 5;
		}

		displayMessage(this.toString());
		toggleButtons(this.validMoves);
		updateScore();
	}
}

var northPole = new Location(0, "North Pole", "Brrr!  It's cold here!");
var theSouth = new Location(1, "The South", "Welcome, y'all");
var outWest = new Location(2, "Out West", "Go west, young man.");
var eastCoast = new Location(3, "East Coast", "You can see the Atlantic Ocean.");
var forest = new Location(4, "Forest", "The trees are dark and spooky here");
var desert = new Location(5, "Desert", "It's hot and dry here");

northPole.validMoves = [ BAD, forest.id, BAD, BAD ];
theSouth.validMoves = [ desert.id, BAD, BAD, BAD ];
outWest.validMoves = [ BAD, BAD, desert.id, BAD ];
eastCoast.validMoves = [ BAD, BAD, BAD, desert.id ];
forest.validMoves = [ northPole.id, desert.id, BAD, BAD ];
desert.validMoves = [ forest.id, theSouth.id, eastCoast.id, outWest.id ];

var locations = [ northPole, theSouth, outWest, eastCoast, forest, desert ];