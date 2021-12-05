//!Important to import module from Global Scope!
import {Board} from "./src/app/Board";
import {Player} from "./src/app/Player";
import {GameAssets} from "./src/app/GameAssets";
import {PlayerMove} from "./src/app/PlayerMove";
import {WinChecker} from "./src/app/WinChecker";

$(() => {

    const players = [new Player("O"), new Player("X")]
    const board = new Board(players);

    board.init();
    var playerMove = new PlayerMove(players, board);
    var currentMove;
    const gameAssets = new GameAssets();
    const winChecker = new WinChecker();
    var won = false;
    let randomStart = playerMove.getRandomStartingMove();
    $(".moves-info-text").append(gameAssets.addInfoBox(randomStart));

    $(".field").click(function () {
        currentMove = playerMove.getCurrentMove();
        playerMove.nextRound(board);
        $(".moves-info-text").append(gameAssets.addInfoBox(playerMove.getPlayerMoveInfo()));
        if ($(this).is(":empty")) {
            this.innerHTML = currentMove;
            let dataNumber = $(this)[0].attributes[1].value;
            //mapped object
            //console.log($(this)[0].attributes[1].value);
            board.fields[dataNumber - 1] = currentMove;
            //console.log(board.fields[dataNumber-1]);
            let win = winChecker.checkWin(board, playerMove);

            if (win === true) {
                $(".moves-info-text").append(gameAssets.addWinBox(playerMove.getPlayerMoveWinInfo()));
            }

            if (win === 2) {
                $(".moves-info-text").append(gameAssets.addGameEndBox(playerMove.getGameEndInfo()));
            }

        } else {
            // console.warn("Can't move to occupied field.")
            $(".moves-info-text").append(gameAssets.addWarnBox(playerMove.getPlayerMoveWarning()));
        }
    });
});

