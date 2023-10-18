var ammo;
var ammoCount = 5;
var round;
var roundGroup;
var roundDamage = 1;

var tool_type = "Sling Shot";
var slingShot_level = 1;

var enemyRound;
var enemyRound_group;

function combatSetup() {
    roundGroup = createGroup();
    enemyRound_group = createGroup();
}

function combatSystem() {
    if(ammoCount > 0) {
        if(keyDown("up_arrow")) {
            if(frameCount % 12 === 0) {
                round = createSprite(player.x, player.y, 15, 15);
                round.addImage(rock_img);
                round.setCollider("rectangle", 0, 0, 15, 15);
                roundGroup.add(round);
                round.velocityY = -20;
                ammoCount -= 1;
            }
        }else if(keyDown("left_arrow")) {
            side = left;
            if(frameCount % 12 === 0) {
                round = createSprite(player.x, player.y, 15, 15);
                round.addImage(rock_img);
                round.setCollider("rectangle", 0, 0, 15, 15);
                roundGroup.add(round);
                round.velocityX = -20;
                ammoCount -= 1;
            }
        }else if(keyDown("down_arrow")) {
            if(frameCount % 12 === 0) {
                round = createSprite(player.x, player.y, 15, 15);
                round.addImage(rock_img);
                round.setCollider("rectangle", 0, 0, 15, 15);
                roundGroup.add(round);
                round.velocityY = 20;
                ammoCount -= 1;
            }
        }else if(keyDown("right_arrow")) {
            side = right;
            if(frameCount % 12 === 0) {
                round = createSprite(player.x, player.y, 15, 15);
                round.addImage(rock_img);
                round.setCollider("rectangle", 0, 0, 15, 15);
                roundGroup.add(round);
                round.velocityX = 20;
                ammoCount -= 1;
            }
        }
    }

    if(player.isTouching(enemy)) {
        if(playerP_state === YU){
            player.velocityY = 50;
        }else if(playerP_state === XR) {
            player.velocityX = -50;
        }else if(playerP_state === YD) {
            player.velocityY = -50;
        }else if(playerP_state === XL) {
            player.velocityX = 50;
        }
    }else if(player.isTouching(enemy3)) {
        if(playerP_state === YU){
            player.velocityY = 50;
        }else if(playerP_state === XR) {
            player.velocityX = -50;
        }else if(playerP_state === YD) {
            player.velocityY = -50;
        }else if(playerP_state === XL) {
            player.velocityX = 50;
        }
    }else {
        player.velocityX = 0;
        player.velocityY = 0;
    }

    if(enemy.isTouching(roundGroup)) {
        console.log("logPost");
        enemy_chaseMode = 1;
        round.remove();
        enemyHealth -= roundDamage;
    }

    if(enemy2.isTouching(roundGroup)) {
        console.log("logPost");
        enemy2_chaseMode = 1;
        round.remove();
        enemy2Health -= roundDamage;
    }

    if(enemy3.isTouching(roundGroup)) {
        console.log("logPost");
        enemy3_chaseMode = 1;
        round.remove();
        enemy3Health -= roundDamage;
    }

    if(player.isTouching(enemyRound_group)) {
        enemyRound.remove();
        healthCount -= 10;
        healthBar.visible = true;
    }else {
        if(frameCount % 100 === 0) {
            healthBar.visible = false;
        }
    }

    if(fy_edges.isTouching(roundGroup)) {
        console.log("aaa");
        round.remove();
    }

    if(enemy_chaseMode === 1 || enemy_chaseMode === 2) {
        if(frameCount % 160 === 0) {
            if(enemy_position === enemyY1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =-20;
            }else if(enemy_position === enemyY1X1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =-20;
                enemyRound.velocityX =-20;
            }else if(enemy_position === enemyX1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityX =-20;
            }else if(enemy_position === enemyY2X1) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =20;
                enemyRound.velocityX =-20;
            }else if(enemy_position === enemyY2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =20;
            }else if(enemy_position === enemyY2X2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =20;
                enemyRound.velocityX =20;
            }else if(enemy_position === enemyX2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityX =20;
            }else if(enemy_position === enemyY1X2) {
                enemyRound = createSprite(enemy.x, enemy.y, 10, 10);
                enemyRound_group.add(enemyRound);
                enemyRound.velocityY =-20;
                enemyRound.velocityX =20;
            }
        }
    }
}

console.log("combat.js is working");