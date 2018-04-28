// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create });

var text;
var counter = 0;


// 开始场景
function preload () {

    game.load.image('cat', 'assets/images/myCat.jpg');
};

// 加载场景
function create () {

    var image = game.add.sprite(game.world.centerX, game.world.centerY, 'cat');
    image.width = game.world.width;
    image.height = game.world.height;

    image.anchor.set(0.5);

    // 启用该图像上的所有输入动作（点击等）
    image.inputEnabled = true;

    //  game.add.text(position.x, position.y, '默认显示文字', { fill: '#ffffff' });
    text = game.add.text(250, 24, '', { fill: '#ffffff' });

    image.events.onInputDown.add(listener, this);

};

// 游戏场景
function listener () {

    counter++;
    text.text = "You clicked " + counter + " times!";

};

