import {Board} from "./Board.js";

class GameAssets {

    addInfoBox(playerMove) {
        return "<div class='col-12'>" + playerMove + "</div>";
    }

    addWarnBox(playerMove) {
        return "<div class='col-12 text-danger font-weight-light'>" + playerMove + "</div>";
    }

    addWinBox(playerMove) {
        return "<div class='col-12 text-danger font-weight-light'>" + playerMove + "</div>";
    }

    addGameEndBox(playerMove) {
        return "<div class='col-12 text-warning font-weight-bold'>" + playerMove + "</div>";
    }
}

export {GameAssets};