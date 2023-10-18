var enemy;
var enemy_position = 1;
var enemyY1 = 1;
var enemyY1X1 = 1.5;
var enemyX1 = 2;
var enemyY2X1 = 2.5;
var enemyY2 = 3;
var enemyY2X2 = 3.5;
var enemyX2 = 4;
var enemyY1X2 = 4.5;
var enemy_friction = 0.5;
var enemy_speed = 1;
var enemyCount = 1;
var enemyKilled = 0;
var enemy_chaseMode = 0;

var enemy2;
var enemy2_position = 1;
var enemy2Y1 = 1;
var enemy2Y1X1 = 1.5;
var enemy2X1 = 2;
var enemy2Y2X1 = 2.5;
var enemy2Y2 = 3;
var enemy2Y2X2 = 3.5;
var enemy2X2 = 4;
var enemy2Y1X2 = 4.5;
var enemy2_friction = 0.5;
var enemy2_speed = 1;
var enemy2Count = 1;
var enemy2Killed = 0;
var enemy2_chaseMode = 0;
var enemy2_VelocityMode = 0;

var enemy3;
var enemy3_position = 1;
var enemy3Y1 = 1;
var enemy3Y1X1 = 1.5;
var enemy3X1 = 2;
var enemy3Y2X1 = 2.5;
var enemy3Y2 = 3;
var enemy3Y2X2 = 3.5;
var enemy3X2 = 4;
var enemy3Y1X2 = 4.5;
var enemy3_friction = 0.5;
var enemy3_speed = 1;
var enemy3Count = 1;
var enemy3Killed = 0;
var enemy3_chaseMode = 0;

var enemy4;
var enemy4_position = 1;
var enemy4Y1 = 1;
var enemy4Y1X1 = 1.5;
var enemy4X1 = 2;
var enemy4Y2X1 = 2.5;
var enemy4Y2 = 3;
var enemy4Y2X2 = 3.5;
var enemy4X2 = 4;
var enemy4Y1X2 = 4.5;
var enemy4_friction = 0.5;
var enemy4_speed = 1;
var enemy4Count = 1;
var enemy4Killed = 0;
var enemy4_chaseMode = 0;

function enemy_setup() {
    enemy = createSprite(200,200,25,25);
    enemy.shapeColor = ("yellow");
    enemy.setCollider("rectangle", 0, 0, 25, 25);
    enemy.friction = enemy_friction;

    enemy2 = createSprite(300,300,25,25);
    enemy2.shapeColor = ("yellow");
    enemy2.setCollider("rectangle", 0, 0, 25, 25);
    enemy2_VelocityMode = Math.round(random(1,4));
    if(enemy2_VelocityMode === 1) {
        enemy2.velocityY = -10;
    }else if(enemy2_VelocityMode === 2) {
        enemy2.velocityX = -10;
    }else if(enemy2_VelocityMode === 3) {
        enemy2.velocityY = 10;
    }else {
        enemy2.velocityX = 10;
    }
    //enemy2.friction = enemy_friction;

    enemy3 = createSprite(150,200,25,25);
    enemy3.shapeColor = ("yellow");
    enemy3.setCollider("rectangle", 0, 0, 25, 25);
    enemy3.friction = enemy_friction;

  // enemy.attractionPoint(1, player.position.x, player.position.y);
}

function enemy_draw() {
    console.log(enemy.velocityX, enemy.velocityY);
    console.log(enemy_position);

    if(enemy.velocityY < 0 && enemy.velocityY < enemy.velocityX) {
        enemy_position = enemyY1;
    }else if(enemy.velocityY > 0 && enemy.velocityY > enemy.velocityX) {
        enemy_position = enemyY2;
    }else if(enemy.velocityX < 0 && enemy.velocityX < enemy.velocityY) {
        enemy_position = enemyX1;
    }else if(enemy.velocityX > 0 && enemy.velocityX > enemy.velocityY) {
        enemy_position = enemyX2;
    }

    if(enemyKilled > enemyCount) {
        enemyKilled = enemyCount;
        //scoringSystem();
    }else if(enemyKilled <= enemyCount) {
        console.log(enemyKilled);
    }

    if(enemy2Killed > enemy2Count) {
        enemy2Killed = enemy2Count;
        //scoringSystem();
    }else if(enemy2Killed <= enemy2Count) {
        console.log(enemy2Killed);
    }

    if(enemy3Killed > enemy3Count) {
        enemy3Killed = enemy3Count;
        //scoringSystem();
    }else if(enemy3Killed <= enemy3Count) {
        console.log(enemy3Killed);
    }

    console.log(score);

    if(enemy_chaseMode === 1) {
        enemy.attractionPoint(enemy_speed*2.5, player.position.x, player.position.y);
    }else if(enemy_chaseMode === 2) {
        enemy.attractionPoint(enemy_speed, player.position.x, player.position.y);
    }
    enemy3.attractionPoint(enemy_speed, player.position.x, player.position.y);

    if(frameCount % 300 === 0) {
        enemy3.attractionPoint(enemy_speed*200, previous_playerX, previous_playerY);
    }
}

console.log("enemy.js is working");