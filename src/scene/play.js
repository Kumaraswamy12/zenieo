import Phaser from "phaser";

export default class play extends Phaser.Scene
{
    preload()
    {

    }
    create()
    {
       const ball= this.add.circle(400,250,10,0xffffff,1)
    }
}