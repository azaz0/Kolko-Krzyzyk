import {Board} from "./Board";

//https://programuj.pl/blog/java-kolko-i-krzyzyk
class WinChecker {


    //Return false==0 == nobody wins
    //Return true==1 == somebody wins
    //Return 2 == nobody wins but there is no more moves
    checkWin(board, playerMove) {

        if (this.checkWinInMoves(playerMove.counter)) {
            return 2;
        }
        return this.checkFirstDiagonal(board, playerMove.getCurrentMove()) ||
            this.checkSecondDiagonal(board, playerMove.getCurrentMove()) ||
            this.checkWinInColumns(board, playerMove.getCurrentMove()) ||
            this.checkWinInRows(board, playerMove.getCurrentMove());
    }

    checkFirstDiagonal(board, activePlayer) {
        var countFields = 0;
        for (var i = 0; i < board.length; i = i + 4) {
            if (board.fields[i] === activePlayer) {
                countFields++;
            }
        }

        //simplify if - else - true - false
        return countFields === 3;
    }

    checkSecondDiagonal(board, activePlayer) {
        var countFields = 0;
        for (var i = 7; i <= 3; i = i - 2) {
            if (board.fields[i - 1] === activePlayer) {
                countFields++;
            }
        }

        //simplify if - else - true - false
        return countFields === 3;
    }

    checkWinInColumns(board, activePlayer) {
        var countFields = 0;
        for (var i = 0; i < 9; i++) {
            if (board.fields[i] === activePlayer) {
                countFields++;
            }

            if (countFields === 3)
                return true

            if (i % 3 === 0)
                countFields = 0;
        }
        return false;
    }

    checkWinInRows(board, activePlayer) {
        for (var i = 0; i < 3; i++) {
            if (board.fields[i] === activePlayer
                && board.fields[i + 3] === activePlayer
                && board.fields[i + 6] === activePlayer)
                return true;
        }


    }

    checkWinInMoves(counter) {
        if (counter === 0)
            return true;
        else
            return false;
    }
}

export {WinChecker};