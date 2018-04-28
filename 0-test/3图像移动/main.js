// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create });

// 开始场景
function preload () {
    game.load.image('cat', 'assets/images/myCat.jpg')
};

// 加载场景
function create () {
    var image = game.add.sprite(0, 0, 'cat');

    image.width = game.world.width;
    image.height = game.world.height;

    //图像向x轴移动，速度150
    game.physics.enable(image, Phaser.Physics.ARCADE);

    image.body.velocity.x = 150;

};

// 游戏场景
