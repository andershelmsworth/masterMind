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

class Peg {
    constructor(color, number){
        this.color = color;
        this.number = number;
        this.rated = false;
    }

}

class Row {
    constructor() {
        this.pegOne = colors.NULL;
        this.pegTwo = colors.NULL;
        this.pegThree = colors.NULL;
        this.pegFour = colors.NULL;
        this.rating = [jcolors.NULL, jcolors.NULL, jcolors.NULL, jcolors.NULL];
        this.numNull = 4;
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

        //Current answer
        this.ansPegOne = colors.RED;
        this.ansPegTwo = colors.BLUE;
        this.ansPegThree = colors.RED;
        this.ansPegFour = colors.BLUE;
    }

    rateGuess() {
        let guessArr = [new Peg(this.rows[this.turn].pegOne, 0), new Peg(this.rows[this.turn].pegTwo, 1), new Peg(this.rows[this.turn].pegThree, 2), new Peg(this.rows[this.turn].pegFour, 3)];
        let ansArr = [new Peg(this.ansPegOne, 0), new Peg(this.ansPegTwo, 1), new Peg(this.ansPegThree, 2), new Peg(this.ansPegFour, 3)];
        let pegsRated = 0;
        let numBlack = 0;
        let numWhite = 0;
        let numNull = 0;

        //Rate black pegs
        for (let j = 0; j < 4; j++) {
            if (guessArr[j].color == ansArr[j].color && guessArr[j].rated == false) {
                //color and position matched
                guessArr[j].rated = true;
                ansArr[j].rated = true;
                numBlack = numBlack + 1;
            }
        }

        //Rate white pegs
        for (let k = 0; k < 4; k++) {
            for (let m = 0; m < 4; m++) {
                if (guessArr[k].color == ansArr[m].color && guessArr[k].rated == false && ansArr[m].rated == false) {
                    //Colors matched and they haven't been rated
                    guessArr[k].rated = true;
                    ansArr[m].rated = true;
                    numWhite = numWhite + 1;
                }

            }

        }

        let x = 0;

        //Guesses rated, set rating pegs
        for (x; x < numBlack; x++) {
            this.rows[this.turn].rating[x] = jcolors.BLACK;
        }

        for (x; x < numBlack + numWhite; x++) {
            this.rows[this.turn].rating[x] = jcolors.WHITE;
        }

    }


    checkGuess() {
        if ((this.rows[this.turn].pegOne == this.ansPegOne) && (this.rows[this.turn].pegTwo == this.ansPegTwo) && (this.rows[this.turn].pegTwo == this.ansPegTwo) && (this.rows[this.turn].pegThree == this.ansPegThree) && (this.rows[this.turn].pegFour == this.ansPegFour)) {
            //Matching guess found
            this.rateGuess();
            this.winState = true;
            return true;
        }
        else {
            this.rateGuess();
            return false;
        }

    }


    
    //don't forget to check that this is the last turn
}

module.exports.Game = Game;
module.exports.Row = Row;
module.exports.colors = colors;
module.exports.jcolors = jcolors;