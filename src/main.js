import Phaser, { Physics } from "phaser";

import titlescene from "./scene/titlescene";
import play from "./scene/play";
const config ={
    width:800,
    height:500,
    type: Phaser.AUTO,
    Physics:{
        default:"arcade", 
       arcade: {
       

        }
    }
    
}

const game= new Phaser.Game(config)

game.scene.add('ts',titlescene)
game.scene.add('p',play)


//game.scene.start('ts')
game.scene.start('p')