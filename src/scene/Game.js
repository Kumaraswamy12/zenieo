import Phaser from "phaser";

class Game extends Phaser.Scene
{
    preload()
    {

    }
    create()
    {
       this.ball= this.add.circle(400,250,10,0xffffff,1)
       this.physics.add.existing(this.ball)
       this.ball.body.setBounce(1,1)

       this.ball.body.setCollideWorldBounds(true,1,1)

       this.ball.body.setVelocity(Phaser.Math.Between(-200,200),Phaser.Math.Between(-200,200))

       this.paddleleft = this.add.rectangle(10,250,15,60,0xffffff)
       this.physics.add.existing(this.paddleleft,true)
       
       this.paddleright = this.add.rectangle(790,250,15,60,0xffffff)
       this.physics.add.existing(this.paddleright,true)
       


       this.physics.add.collider(this.paddleleft,this.ball)
       this.physics.add.collider(this.paddleright,this.ball)

       this.cursors =this.input.keyboard.createCursorKeys()

    }
    update()
    {
        const body=this.paddleleft.body
        const body1=this.paddleright.body

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

        const diff= this.ball.y - this.paddleright.y

        if(diff<0)
            {
                this.paddleright.y-=10
                this.updateFromGameObject
            }
        else if (diff>0)
            {
                this.paddleright.y+=10
                this.updateFromGameObject
            }

            
    }
}

export default Game

