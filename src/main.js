import Phaser from "phaser";

import titlescene from "./scene/titlescene";
import Game from "./scene/Game";
const config ={
    width:800,
    height:500,
    type: Phaser.AUTO,
  physics:{
        default:'arcade', 
       arcade: {
                gravity:{y:0}
                   
                

        }
    }
    
};

const game= new Phaser.Game(config)

game.scene.add('ts',titlescene)
game.scene.add('p',Game)


//game.scene.start('ts')
game.scene.start('p')