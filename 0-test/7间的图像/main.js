// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

var tween;
var prev = -400;
var t = Date.now();
var sprite;

// 开始场景
function preload () {

	game.forceSingleUpdate = true;

	//你可以用你的游戏需要的资产来填充预加载器。
	// 我们正在加载一个图像。第一个参数是唯一的。
	//字符串，我们稍后将在代码中识别图像。
	//第二个参数是图像的URL（相对）

	game.load.image('cat', 'assets/images/myCat.jpg');

};


// 加载场景
function create() {

    sprite = game.add.sprite(-400, 0, 'cat');
    // var sprite = game.add.sprite(0, 0, 'einstein');

    sprite.width = game.world.width;
    sprite.height = game.world.height;

    //  Here we create a tween on the sprite created above
    tween = game.add.tween(sprite);

    //  The object defines the properties to tween.
    //  In this case it will move to x 600
    //  The 6000 is the duration in ms - 6000ms = 6 seconds
    // tween.to({ x: 500, y: 500 }, 5000, 'Linear', true, 2000);
    tween.to({ x: width }, 5000, 'Linear', true, 0);

    //  And this starts it going
    // tween.start();

}

function update() {

    if (sprite.x < width)
    {
    	console.log(sprite.x);
        // sprite.x += 4;

    };

    // if (sprite.x >= width ) {
    // 	sprite.x = 0;
    // };

}

function render() {

    return;

    if (sprite.x < width)
    {
        var ms = Date.now() - t;

        var d = window.dx - prev;

        if (ms > 20)
        {
            console.log('------------>', ms, d);
        }
        else
        {
            console.log(ms, d);
        }

        prev = window.dx;

        t = Date.now();
        console.log(t);
    }

    game.debug.text(this.game.time.elapsedMS, 32, 32);
    game.debug.text(window.dx, 32, 32);

}
