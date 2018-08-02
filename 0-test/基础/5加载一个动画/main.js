// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create });

// 开始场景
function preload () {
	game.load.image('cat', 'assets/images/myCat.jpg');
	game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
};

// 加载场景
function create () {

	// new-add start
	var image = game.add.sprite(0, 0, 'cat');

	image.width = game.world.width;
	image.height = game.world.height;

	//图像向x轴移动，速度150
  game.physics.enable(image, Phaser.Physics.ARCADE);
  image.body.velocity.x = 0;

	// new-add end

	//  这个精灵图正在使用纹理阿特拉斯来处理所有动画数据。
	var bot = game.add.sprite( 500, 300, 'bot');

	// 在这里，我们添加了一个新的动画，叫做Run
  // 我们没有指定任何帧，因为它使用纹理阿特拉斯中的每一帧。
  bot.animations.add('run');

  //  通过使用它的键（“运行”）开始动画播放。
	// 15是帧速率（15FPS）
	// true 意味着它会在它结束的时候循环
  bot.animations.play('run', 15, true);
};
