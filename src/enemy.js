export default class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y) {
        super(scene,x,y,'enemy');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.scene.anims.create({
            key: 'rotating',
            frames: scene.anims.generateFrameNumbers('enemy', { start: 0, end: 2 }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.play('rotating', true);
        this.scene.tweens.add({
            targets: this,
            x          :{from:x-30, to:x+30},
            ease: 'sine.inout',
            duration: 1500,
            delay: 50,
            repeat: -1,
            yoyo: true
        });
    }
    update()
    {
        this.body.setVelocityY(50);
    }

}