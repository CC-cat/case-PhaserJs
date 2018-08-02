
var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    game.load.image('undersea', 'assets/pics/undersea.jpg');

};

var bg;
var greenJellyfish;

function create() {

    bg = game.add.image(0, 0, 'undersea');
		bg.width = game.world.width;
		bg.height = game.world.height;

    greenJellyfish = game.add.sprite(800, 200, 'seacreatures', 'greenJellyfish0000');

    game.input.onDown.add(changeFrame, this);

}

function changeFrame() {

    greenJellyfish.frameName = 'greenJellyfish0010';

}


