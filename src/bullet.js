export default class Bullet extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,pool) {
        super(scene,x,y,'bullet');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.pool = pool;
        update()
        {
            this.body.setVelocityY(-80);
        }
    }
}