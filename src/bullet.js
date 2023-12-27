export default class Bullet extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,pool) {
        super(scene,x,y,'bullet');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.pool = pool;
        this.y =y;
        
       
    } 
    preUpdate(t,dt)
        {
            super.preUpdate(t, dt);
            
            this.body.setVelocityY(-80);
             if (this.y<=0)
             {
                this.destroyMe();
             }
        }

        destroyMe()
        {
            this.pool.release(this)
        }
}