import Phaser from "phaser";

class Game extends Phaser.Scene
{
    init()
    {
        this.ls=0
        this.rs=0
    }
    preload()
    {

    }
    create()
    {
        this.physics.world.setBounds(-100,0,1000,500)

       this.ball= this.add.circle(400,250,10,0xffffff,1)
       this.physics.add.existing(this.ball)
       this.ball.body.setBounce(1,1)

       this.ball.body.setCollideWorldBounds(true,1,1)

       const angle= Phaser.Math.Between(0,360)
       const vec=this.physics.velocityFromAngle(angle,200)

       this.ball.body.setVelocity(vec.x,vec.y)

       this.paddleleft = this.add.rectangle(10,250,15,60,0xffffff)
       this.physics.add.existing(this.paddleleft,true)
       
       this.paddleright = this.add.rectangle(790,250,15,60,0xffffff)
       this.physics.add.existing(this.paddleright,true)
       


       this.physics.add.collider(this.paddleleft,this.ball)
       this.physics.add.collider(this.paddleright,this.ball)

      this.leftscore= this.add.text(100,25,'0',{fontSize:48}).setOrigin(.5,.5)
      this.rightscore= this.add.text(700,25,'0',{fontSize:48}).setOrigin(.5,.5)


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


        if(this.ball.x<-30)
            {
                this.resetball()
            }
        else if(this.ball.x>830)
            {
                this.resetball()
            }            
    }
    resetball()
    {
        this.ball.setPosition(400,250)


        const angle= Phaser.Math.Between(0,360)
       const vec=this.physics.velocityFromAngle(angle,200)

       this.ball.body.setVelocity(vec.x,vec.y)
    }
}

export default Game

