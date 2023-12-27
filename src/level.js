import Player from "./player.js";
import Enemy from "./enemy.js";
import item from "./item.js";
export default class Level extends Phaser.Scene {
    constructor() {
        super({ key: "Level" });
    }
    init(data) {
        console.log('init', data);

        this.multiplayer = data.multiplayer;
    }
    create() {
        this.physics.world.drawDebug = false;
        this.toggleDebug = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        this.bg = this.add.image(0, -1160, 'bg').setOrigin(0);
        this.bullet = this.add.group({
            maxSize: 100,
            runChildUpdate: true
        })
        this.player = this.add.group({
            maxSize: 2,
            runChildUpdate: true
        });
        this.enemy = this.add.group({
            maxSize: 10,
            runChildUpdate: true
        })
        this.tweens.add(
            {
                targets: this.bg,
                y: +1,
                ease: 'Linear',
                duration: 50000,
                repeat: 0,
                yoyo: false,
            });
        var playerInput = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
        });
        if (this.multiplayer) {
            var player2Input = this.input.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.UP,
                down: Phaser.Input.Keyboard.KeyCodes.DOWN,
                left: Phaser.Input.Keyboard.KeyCodes.LEFT,
                right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                space: Phaser.Input.Keyboard.KeyCodes.ENTER,
            });
            var p2Pos = this.cameras.main.centerX + this.cameras.main.centerX / 2;

            this.player.add(new Player(this, p2Pos, 200, 'player2', player2Input));

            this.player.add(new Player(this, this.cameras.main.centerX / 2, 200, 'player', playerInput));
        }
        else {
            this.player.add(new Player(this, this.cameras.main.centerX, 200, 'player', playerInput));
        }
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(this.toggleDebug)) {
            if (this.physics.world.drawDebug) {
                this.physics.world.drawDebug = false;
                this.physics.world.debugGraphic.clear();
            }
            else {
                this.physics.world.drawDebug = true;
            }
        }
    }
}