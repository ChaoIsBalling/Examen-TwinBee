export default class item extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y) {
        super(scene,x,y,'item');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    update()
    {
        this.body.setVelocityY(20);
    }
}