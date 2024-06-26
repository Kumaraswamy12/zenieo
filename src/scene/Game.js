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

       this.paddleleft = this.add.rectangle(20,250,20,50,0xffffff)
       this.physics.add.existing(this.paddleleft,true)       


       this.physics.add.collider(this.paddleleft,ball)

       this.cursors =this.input.keyboard.createCursorKeys()

    }
    update()
    {
        const body=this.paddleleft.body

        if(this.cursors.up.isDown)
            {
                this.paddleleft.y -=1
                body.updateFromGameObject()
            }
        else if(this.cursors.down.isDown)
            {
                this.paddleleft.y +=1
                body.updateFromGameObject()
            }
    }
}

export default Game

