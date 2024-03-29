import logo from "../assets/dc-lego/dc-logo.png";
import batman from "../assets/dc-lego/batman.jpg";
import constantine from "../assets/dc-lego/constantine.jpg";
import flash from "../assets/dc-lego/flash.jpg";
import cyborg from "../assets/dc-lego/cyborg.jpg";
import superman from "../assets/dc-lego/superman.png";
import aquaman from "../assets/dc-lego/aquaman.png";
import wonderWoman from "../assets/dc-lego/wonder-woman.jpg";
import beastBoy from "../assets/dc-lego/beast-boy.jpg";
import greenLatern from "../assets/dc-lego/green-latern.jpg";
import supergirl from "../assets/dc-lego/supergirl.jpg";
import joker from "../assets/dc-lego/joker.jpg";
import alfred from "../assets/dc-lego/alfred.png";
import martianManhunter from "../assets/dc-lego/martian-manhunter.jpg";
import dick from "../assets/dc-lego/dick.png";
import kidFlash from "../assets/dc-lego/kid-flash.jpg";

import { v4 as uuidv4 } from 'uuid';

function dcLego() {
    let dcLegoHeroes = {
        logo,
        data : [
            { 
                id : uuidv4(), 
                src :  batman,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  superman,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  flash,
                isClicked : false
            },
            { 
                id : uuidv4(), 
                src :  constantine,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  aquaman,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  wonderWoman,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  cyborg,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  greenLatern,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  supergirl,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  joker,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  beastBoy,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  alfred,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  martianManhunter,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  dick,
                isClicked : false

            },
            { 
                id : uuidv4(), 
                src :  kidFlash,
                isClicked : false

            },

            
        ]
    }

    return dcLegoHeroes;
}

export default dcLego;