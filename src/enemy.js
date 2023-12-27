export default class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y) {
        super(scene,x,y,'enemy');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    update()
    {
        this.body.setVelocityY(50);
    }

}