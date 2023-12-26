export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture, cursors) {
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
        this.cursors=cursors;
        this.scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers(texture, { start: 1, end: 1}),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers(texture, { start: 2, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNumbers(texture, { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });
    }
    update()
    {
       this.movement();
       this.shoot();
    }

    shoot()
    {
        if(this.cursors.space.isDown)
        {
        var shoot=this.scene.sound.add('shoot')
        shoot.play();
        }
    }
    movement()
    {
        if (this.cursors.left.isDown)
        {
            this.body.setVelocityX(-50);
            this.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.body.setVelocityX(50);
            this.anims.play('right', true);
        }
        else{
            this.body.setVelocityX(0); 
            this.anims.play('idle', true);
        }

        if(this.cursors.up.isDown)
        {
            this.body.setVelocityY(-50); 
        }
        else if(this.cursors.down.isDown)
        {
            this.body.setVelocityY(50); 
        }
        else{
            this.body.setVelocityY(0); 
        }
    }

}