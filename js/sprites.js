//Object de sons
var sounds = new function(){
	this.impact = new Audio("sound/impact.wav");
	this.bullet = new Audio("sound/playerattack.wav");
	this.gold = new Audio("sound/gold.wav");
	this.enemyDeath = new Audio("sound/enemydeath.wav");
	this.playerDmg = new Audio("sound/playerdmg.wav");
	this.playerDeath = new Audio("sound/playerdeath.wav");
};


//Object d'images
var imageTool = new function() {
	this.background = new Image();
	this.pauseScreen = new Image();
	this.startScreen = new Image();
	this.blackScreen = new Image();
	this.hp = new Image();
	this.emptyHp = new Image();
	this.stats = new Image();
	this.stat = new Image();
	this.hit = new Image();
	this.noDamage = new Image();
	this.playerDead = new Image();
	this.playerDown = new Image();
	this.playerLeft = new Image();
	this.playerUp = new Image();
	this.playerRight = new Image();
	this.playerBullet = new Image();
	this.minion = new Image();
	this.minionDamaged = new Image();
	this.tower = new Image();
	this.towerBullet = new Image();
	this.towerDamaged = new Image();
	this.block = new Image();
	this.hole = new Image();
	this.coin = new Image();
	this.gold = new Image();
	this.health = new Image();
	this.maxHealth = new Image();
	this.speedBoost = new Image();
	this.dmgBoost = new Image();
	this.rangeBoost = new Image();
	this.fireRateBoost = new Image();
	this.bulletSpeedBoost = new Image();
	//Préchargement
	var numImages = 32;
	var numLoaded = 0;
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {gameInit();}}
	this.background.onload = function() {imageLoaded();}
	this.pauseScreen.onload = function() {imageLoaded();}
	this.startScreen.onload = function() {imageLoaded();}
	this.blackScreen.onload = function() {imageLoaded();}
	this.hp.onload = function() {imageLoaded();}
	this.emptyHp.onload = function() {imageLoaded();}
	this.stats.onload = function() {imageLoaded();}
	this.stat.onload = function() {imageLoaded();}
	this.hit.onload = function() {imageLoaded();}
	this.noDamage.onload = function() {imageLoaded();}
	this.playerDead.onload = function() {imageLoaded();}
	this.playerDown.onload = function() {imageLoaded();}
	this.playerLeft.onload = function() {imageLoaded();}
	this.playerUp.onload = function() {imageLoaded();}
	this.playerRight.onload = function() {imageLoaded();}
	this.playerBullet.onload = function() {imageLoaded();}
	this.minion.onload = function() {imageLoaded();}
	this.minionDamaged.onload = function() {imageLoaded();}
	this.tower.onload = function() {imageLoaded();}
	this.towerBullet.onload = function() {imageLoaded();}
	this.towerDamaged.onload = function() {imageLoaded();}
	this.block.onload = function() {imageLoaded();}
	this.hole.onload = function() {imageLoaded();}
	this.coin.onload = function() {imageLoaded();}
	this.gold.onload = function() {imageLoaded();}
	this.health.onload = function() {imageLoaded();}
	this.maxHealth.onload = function() {imageLoaded();}
	this.speedBoost.onload = function() {imageLoaded();}
	this.dmgBoost.onload = function() {imageLoaded();}
	this.rangeBoost.onload = function() {imageLoaded();}
	this.fireRateBoost.onload = function() {imageLoaded();}
	this.bulletSpeedBoost.onload = function() {imageLoaded();}
	//Sources
	this.background.src = "img/bg.png";
	this.pauseScreen.src = "img/pause.png";
	this.startScreen.src = "img/start.png";
	this.blackScreen.src = "img/screen.png";
	this.hp.src = "img/hp.png";
	this.emptyHp.src = "img/emptyHp.png";
	this.stats.src = "img/stats.png";
	this.stat.src = "img/stat.png";
	this.hit.src = "img/hit.png";
	this.noDamage.src = "img/nodamage.png";
	this.playerDead.src = "img/playerdead.png";
	this.playerDown.src = "img/player.png";
	this.playerLeft.src = "img/player1.png";
	this.playerUp.src = "img/player2.png";
	this.playerRight.src = "img/player3.png";
	this.playerBullet.src = "img/bullet.png";
	this.minion.src = "img/minion.png";
	this.minionDamaged.src = "img/miniondamaged.png";
	this.tower.src = "img/tower.png";
	this.towerBullet.src = "img/towerbullet.png";
	this.towerDamaged.src = "img/towerdamaged.png";
	this.block.src = "img/block.png";
	this.hole.src = "img/hole.png";
	this.coin.src = "img/coin.png";
	this.gold.src = "img/gold.png";
	this.health.src = "img/health.png";
	this.maxHealth.src = "img/maxhealth.png";
	this.speedBoost.src = "img/speedboost.png";
	this.dmgBoost.src = "img/dmgboost.png";
	this.rangeBoost.src = "img/rangeboost.png";
	this.fireRateBoost.src = "img/firerateboost.png";
	this.bulletSpeedBoost.src = "img/bulletspeedboost.png";
}