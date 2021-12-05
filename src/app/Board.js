import {PlayerMove} from "./PlayerMove";
import {GameAssets} from "./GameAssets";

class Board {

    //Array with objects players

    constructor(players) {
        this.playerFirst = players[0];
        this.playerSecond = players[1];
        this.fields = Array(9);
    }

    init() {
    }
}

export {Board};