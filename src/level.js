export default class Level extends Phaser.Scene
{
    constructor(){
        super({key: "Level"});
    }
    create()
    {
        this.load.image('bg');
    }
    update()
    {
        console.log("s");
    }
}