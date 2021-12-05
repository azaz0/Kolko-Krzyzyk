import {addMethod} from "./Service/OverloadingMethod";

class Player {


    //set default name to "X"
    //String this.name
    constructor(playerName) {
        this.name = playerName;
    }

    //return string name
    getPlayerName() {
        return this.name;
    }

    //String name
    setPlayerName(name) {
        this.name = name;
    }
}

export {Player};