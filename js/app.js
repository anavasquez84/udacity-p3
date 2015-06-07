// Enemies our player must avoid
var Enemy = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //ENEMY POSITION
    this.x = this.x + Math.floor(Math.random() * 400) * dt;
    if(this.x > 500){
        this.x= -100
    }
    //RESET  ON COLLISION
     if(player.x >= this.x - 20 && player.x <= this.x + 20){
        if(player.y >= this.y - 20 && player.y <= this.y + 20){
            player.reset();
        }
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.boy = 'images/char-boy.png';
}

Player.prototype.handleInput = function(move){
    if(move === 'right' && this.x < 400){
        this.x = this.x + 100;
        } else if(move === 'left' && this.x > 0){
            this.x = this.x - 100;
        } else if(move === 'up' && this.y > 0){
            this.y = this.y - 82;
        } else if(move === 'down' && this.y < 400){
            this.y = this.y + 82;
    }
}

Player.prototype.reset = function(){
        this.x=200;
        this.y=400;
}

Player.prototype.update = function(dt){
    if(this.y === -10){
        this.reset();
    }
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.boy), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var bug1 = new Enemy(100,154);
allEnemies.push(bug1);
var bug2 = new Enemy(400,154);
allEnemies.push(bug2);
var bug3 = new Enemy(300,236);
allEnemies.push(bug3);
var bug4 = new Enemy(300, 72);
allEnemies.push(bug4);


var player = new Player(200, 400); 

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});  