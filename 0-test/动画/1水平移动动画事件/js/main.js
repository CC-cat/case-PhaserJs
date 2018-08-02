// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;
console.log('width: ' + width);

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });


// 加载场景
function preload () {
	game.load.image('lazur', 'assets/images/thorn_lazur.png');
	game.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
};

var bg;
var mummy;
var anim;
var loopText;

// 开始场景
function create() {

    bg = game.add.image(0, 0, 'lazur');
    bg2 = game.add.image(width, 0, 'lazur');
    bg.width = game.world.width;
    bg.height = game.world.height;
    bg2.width = game.world.width;
    bg2.height = game.world.height;
    bg.smoothed = false;
    bg2.smoothed = false;

    mummy = game.add.sprite(width/2.5, height/1.3, 'mummy', 5);
    mummy.scale.set(4);
    mummy.smoothed = false;
    anim = mummy.animations.add('walk');

    anim.onStart.add(animationStarted, this);
    anim.onLoop.add(animationLooped, this);
    anim.onComplete.add(animationStopped, this);

    anim.play(10, true);

}

function animationStarted(sprite, animation) {

    game.add.text(32, 32, 'Animation started', { fill: 'white' });

};

function animationLooped(sprite, animation) {

    if (animation.loopCount === 1)
    {
        loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });
    }
    else
    {
        loopText.text = 'Animation looped x'+animation.loopCount;
        // 		animation.loop = false;
    };

};

function animationStopped(sprite, animation) {

    game.add.text(32, 64+32, 'Animation stopped', { fill: 'white' });

};



function update() {

var a = parseInt(-width);

    if (anim.isPlaying)
    {

        if ( (bg.x < a || bg.x == a) ) {

        	bg.x = width;

        } else {

        	bg.x -= 2;
        };

        if ( (bg2.x < a || bg2.x == a) ) {

        	bg2.x = width;

        } else {

        	bg2.x -= 2;
        };

    };
};
