const colors = {
    RED: '#dc3545',
    ORANGE: '#fd7e14',
    YELLOW: '#ffc107',
    GREEN: '#28a745',
    BLUE: '#007bff',
    VIOLET: '#6f42c1',
    NULL: '#C8C8C8'
}

const jcolors = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    NULL: '#C8C8C8'
}

class Row {
    constructor() {
        this.pegOne = colors.NULL;
        this.pegTwo = colors.NULL;
        this.pegThree = colors.NULL;
        this.pegFour = colors.NULL;
        this.jOne = jcolors.NULL;
        this.jTwo = jcolors.NULL;
        this.jThree = jcolors.NULL;
        this.jFour = jcolors.NULL;
    }
}

class Game {
    constructor() {
        let rowArr = [];
        this.rows = rowArr;

        for (let i = 0; i < 12; i++) {
            this.rows[i] = new Row;
        }
        this.winState = false;
        this.turn = 0;

        this.ansPegOne = colors.RED;
        this.ansPegTwo = colors.BLUE;
        this.ansPegThree = colors.RED;
        this.ansPegFour = colors.BLUE;
    }

    // Getter
    get won() {
        return this.winState;
    }

    reset() {
        let newRowArr = [];
        this.rows = newRowArr;

        for (let i = 0; i < 12; i++) {
            this.rows[i] = new Row;
        }
        this.winState = false;
        this.turn = 0;

        this.ansPegOne = colors.RED;
        this.ansPegTwo = colors.BLUE;
        this.ansPegThree = colors.RED;
        this.ansPegFour = colors.BLUE;
    }



    checkGuess() {
        if ((this.rows[this.turn].pegOne == this.ansPegOne) && (this.rows[this.turn].pegTwo == this.ansPegTwo) && (this.rows[this.turn].pegTwo == this.ansPegTwo) && (this.rows[this.turn].pegThree == this.ansPegThree) && (this.rows[this.turn].pegFour == this.ansPegFour)) {
            //Matching guess found
            this.winState = true;
            return true;
        }
        else {
            return false;
        }

    }


    
    //don't forget to check that this is the last turn
}

module.exports.Game = Game;
module.exports.Row = Row;
module.exports.colors = colors;
module.exports.jcolors = jcolors;