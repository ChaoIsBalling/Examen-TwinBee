import Player from "./player.js";
export default class Level extends Phaser.Scene
{
    constructor(){
        super({key: "Level"});
    }
    init (data)
    {
        console.log('init', data);

        this.multiplayer = data.multiplayer;
    }
    create()
    {   this.physics.world.drawDebug = false;
        this.toggleDebug = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        this.bg=this.add.image(0, -1160, 'bg').setOrigin(0);
        this.tweens.add(
        {targets: this.bg,
            y:+1,
            ease: 'Linear',    
            duration: 50000,
            repeat: 0,           
            yoyo: false,
        });
        var playerInput= this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
          });
        this.player=new Player(this,this.cameras.main.centerX,200,'player',playerInput);
    }
    update()
    { 
        this.player.update();
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