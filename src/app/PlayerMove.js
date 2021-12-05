import {Board} from "./Board";

class PlayerMove {

    //player
    constructor(players, board) {
        this.currentMove = players[0].name;
        this.players = players;
        this.counter = board.fields.length;
    }

    getCurrentMove() {
        return this.currentMove;
    }

    setCurrentMove(playerName) {
        this.currentMove = playerName;
    }

    //return boolean
    nextRound(board) {
        this.countMove(board);
        if (this.getCurrentMove() === this.players[0].name)
            this.currentMove = this.players[1].name;
        else
            this.currentMove = this.players[0].name;
    }

    countMove(board) {
        if (this.counter > 0) {
            board.fields.push(this.currentMove);
            this.counter--;
        }
    }

    getRandomStartingMove() {
        let min = Math.ceil(1);
        let max = Math.floor(1000);
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if (randomNumber % 2) {
            this.currentMove = this.players[0].name;
        } else {
            this.currentMove = this.players[1].name;
        }
        return "Player " + this.getCurrentMove() + " Start";
    }

    getPlayerMoveInfo() {
        return "Time For Player " + this.currentMove + " To Move.";
    }

    getPlayerMoveWarning() {
        return "Can't move to occupied field.";
    }

    getPlayerMoveWinInfo() {
        alert("Player: " + this.currentMove + " Is The Winner.");
        return "Player: " + this.currentMove + " Is The Winner.";

    }

    getGameEndInfo() {
        return "There Is No Winner In This Match.";
    }

}

export {PlayerMove};