export default class Bullet extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,pool,time) { 
        super(scene,x,y,'bullet');
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.pool = pool;
        this.y=y;   
        this.time=time
    } 
    preUpdate(t,dt)
        {
            console.log(this.time)
            super.preUpdate(t, dt);
            
            this.body.setVelocityY((-80-this.time));
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