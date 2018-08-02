// 实际应用场景改为window.innerWidth和window.innerHeight。
// 这里是为了方便查看示例。
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create });

// 开始场景
function preload () {

};

// 加载场景
function create () {
	var text = "洋葱骑士\n 洋葱骑士家里养了一只猫 \n 猫的名字叫：乖乖 ";
	// 设置文本样式：大小、字体、颜色、排列方向
	var style = {
		font: "46px '微软雅黑'",
		fill: "#ffffff",
		align: "center",
	};

	var t = game.add.text(game.world.centerX-300, 300, text, style);
};
