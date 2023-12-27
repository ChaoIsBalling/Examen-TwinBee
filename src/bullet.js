export default class Buller extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y) {
        super(scene,x,y,'bullet');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        update()
        {
            this.body.setVelocityY(-80);
        }
    }
}