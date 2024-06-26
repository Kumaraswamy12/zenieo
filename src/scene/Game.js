import Phaser from "phaser";

class Game extends Phaser.Scene
{
    preload()
    {

    }
    create()
    {
       const ball= this.add.circle(400,250,10,0xffffff,1)
       this.physics.add.existing(ball)
       ball.body.setBounce(1,1)

       ball.body.setCollideWorldBounds(true,1,1)

       ball.body.setVelocity(-200,0)

       const paddleleft = this.add.rectangle(20,250,20,50,0xffffff)
       this.physics.add.existing(paddleleft,true)       


       this.physics.add.collider(paddleleft,ball)


       
    }
}

export default Game

