
var width = window.innerWidth;
var height = window.innerHeight;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'example', { preload: preload, create: create, render: render });

function preload() {

    game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
    //37X45是每个frame的尺寸，画面并没有占满全部图片，所以添加一个参数：显示画面的数量
    game.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

}

var bot;

function create() {

    bot = game.add.image(200, 200, 'bot');
		bot.animations.add('run');
		bot.animations.play('run', 15, true);

		game.input.onDown.addOnce(changeMummy, this);

};

function changeMummy() {

	bot.loadTexture('mummy', 0);
	bot.animations.add('walk');
	bot.animations.play('walk', 30, true);

};

function render() {
	game.debug.body(bot);
};




