// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

// 开始场景
function preload () {
	game.load.image('cat', 'assets/images/myCat.jpg');
};

var sprite;


// 加载场景
function create () {
	// 为了使精灵图移动，我们需要启用街机物理。
	game.physics.startSystem(Phaser.Physics.ARCADE);

	sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'cat');

	sprite.width = game.world.width/10;
	sprite.height = game.world.height/10;

	sprite.anchor.set(0.5);

	game.physics.arcade.enable(sprite);
};

// 游戏场景
function update () {
	//  如果精灵图从指针离开了8px，那么让我们移动它
	if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {

		//  使对象寻找到主动指针（鼠标或触摸）
		game.physics.arcade.moveToPointer(sprite, 300);

	} else {
		// 否则关闭速度因为我们离指针足够近
		sprite.body.velocity.set(0);
	};
};

function render () {
	// 左上角信息(鼠标位置)
	game.debug.inputInfo(32, 32);
};
