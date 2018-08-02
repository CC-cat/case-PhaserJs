var IDE_HOOK = false;
var VERSION = '2.4.7.complete';

var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(width, height, Phaser.WEBGL, 'example', { preload: preload, create: create, update: update });

function preload() {

	game.load.image('sky', 'assets/skies/deepblue.png');
  game.load.image('dragonTexture', 'assets/creature/dragon.png');
  game.load.json('dragonMesh', 'assets/creature/dragon.json');

};

var bg;
var dragon1 = null;
var dragon2 = null;

function create() {

    bg = game.add.image(0, 0, 'sky');
		bg.width = game.world.width;
		bg.height = game.world.height;

    dragon1 = game.add.creature(150, 200, 'dragonTexture', 'dragonMesh');
    dragon1.scale.set(15.0);
    dragon1.play(true); //  true = loop

    dragon2 = game.add.creature(0, 400, 'dragonTexture', 'dragonMesh');
    dragon2.scale.set(25.0);
    dragon2.play(true); //  true = loop

};

function update() {

    dragon1.x += 6;

    if (dragon1.x > width+100)
    {
        dragon1.x = -200;
    }

    dragon2.x += 4;

    if (dragon2.x > width+300)
    {
        dragon2.x = -300;
    }

}



