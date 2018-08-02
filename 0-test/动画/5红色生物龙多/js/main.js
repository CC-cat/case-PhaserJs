var IDE_HOOK = false;
var VERSION = '2.4.7.complete';

var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(width, height, Phaser.WEBGL, 'game', { preload: preload, create: create });

function preload() {

    game.load.image('sky', 'assets/skies/deepblue.png');
    game.load.image('dragonTexture', 'assets/creature/dragon.png');
    game.load.json('dragonMesh', 'assets/creature/dragon.json');

}

var dragon = null;

function create() {

    var bg = game.add.image(0, 0, 'sky');

    bg.width = game.world.width;
    bg.height = game.world.height;

    dragon = game.add.creature(450, 350, 'dragonTexture', 'dragonMesh');

    dragon.scale.set(20);

    dragon.play(true); //  true = loop

}
