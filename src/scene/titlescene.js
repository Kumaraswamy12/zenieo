import Phaser from "phaser";

export default class titlescene extends Phaser.Scene
{
    preload()
    {

    }
    create()
    {
        const text=this.add.text(400,250,"love you")
        text.setOrigin(0.5,0.5)


    }
}