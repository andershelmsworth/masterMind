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

        switch (color) {
            case colors.RED:
                this.index = 0;
                break;
            case colors.ORANGE:
                this.index = 1;
                break;
            case colors.YELLOW:
                this.index = 2;
                break;
            case colors.GREEN:
                this.index = 3;
                break;
            case colors.BLUE:
                this.index = 4;
                break;
            case colors.VIOLET:
                this.index = 5;
                break;
            default:
                break;
        }

    }

}

class SolutionSet {
    constructor() {
        let solArr = [];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                for (let k = 0; k < 6; k++) {
                    for (let m = 0; m < 6; m++) {
                        solArr.push([[i, j, k, m], 0]);
                    }
                }
            }

        }
        this.solArr = solArr;
    }
}

class Responses {
    constructor() {
        let responseArr = [];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                responseArr.push([i, j]);
            }

        }
        this.responseArr = responseArr;
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

        this.firstRun = true;
        for (let i = 0; i < 12; i++) {
            this.rows[i] = new Row;
        }

        this.guess = new Row;

        this.winState = false;
        this.turn = 0;

        this.ansPegOne = colors.RED;
        this.ansPegTwo = colors.ORANGE;
        this.ansPegThree = colors.YELLOW;
        this.ansPegFour = colors.GREEN;


        let S = new SolutionSet;
        let U = new SolutionSet;

        this.S = S;
        this.U = U;

        this.answerPegs = [0, 1, 2, 3];

        this.spliceIndex = 0;

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
        this.ansPegTwo = colors.ORANGE;
        this.ansPegThree = colors.YELLOW;
        this.ansPegFour = colors.GREEN;

        this.S = new SolutionSet;
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

    assignGuess(computersGuess) {
        switch (computersGuess[0]) {
            case 0:
                this.guess.pegOne = colors.RED;
                break;
            case 1:
                this.guess.pegOne = colors.ORANGE;
                break;
            case 2:
                this.guess.pegOne = colors.YELLOW;
                break;
            case 3:
                this.guess.pegOne = colors.GREEN;
                break;
            case 4:
                this.guess.pegOne = colors.BLUE;
                break;
            case 5:
                this.guess.pegOne = colors.VIOLET;
                break;
            default:
                break;
        }

        switch (computersGuess[1]) {
            case 0:
                this.guess.pegTwo = colors.RED;
                break;
            case 1:
                this.guess.pegTwo = colors.ORANGE;
                break;
            case 2:
                this.guess.pegTwo = colors.YELLOW;
                break;
            case 3:
                this.guess.pegTwo = colors.GREEN;
                break;
            case 4:
                this.guess.pegTwo = colors.BLUE;
                break;
            case 5:
                this.guess.pegTwo = colors.VIOLET;
                break;
            default:
                break;
        }

        switch (computersGuess[2]) {
            case 0:
                this.guess.pegThree = colors.RED;
                break;
            case 1:
                this.guess.pegThree = colors.ORANGE;
                break;
            case 2:
                this.guess.pegThree = colors.YELLOW;
                break;
            case 3:
                this.guess.pegThree = colors.GREEN;
                break;
            case 4:
                this.guess.pegThree = colors.BLUE;
                break;
            case 5:
                this.guess.pegThree = colors.VIOLET;
                break;
            default:
                break;
        }

        switch (computersGuess[3]) {
            case 0:
                this.guess.pegFour = colors.RED;
                break;
            case 1:
                this.guess.pegFour = colors.ORANGE;
                break;
            case 2:
                this.guess.pegFour = colors.YELLOW;
                break;
            case 3:
                this.guess.pegFour = colors.GREEN;
                break;
            case 4:
                this.guess.pegFour = colors.BLUE;
                break;
            case 5:
                this.guess.pegFour = colors.VIOLET;
                break;
            default:
                break;
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

    translateGuess() {
        let currentGuess = this.rows[this.turn];

        let guessArr = [];

        switch (currentGuess.pegOne) {
            case colors.RED:
                guessArr.push(0);
                break;
            case colors.ORANGE:
                guessArr.push(1);
                break;
            case colors.YELLOW:
                guessArr.push(2);
                break;
            case colors.GREEN:
                guessArr.push(3);
                break;
            case colors.BLUE:
                guessArr.push(4);
                break;
            case colors.VIOLET:
                guessArr.push(5);
                break;
            default:
                break;
        }

        switch (currentGuess.pegTwo) {
            case colors.RED:
                guessArr.push(0);
                break;
            case colors.ORANGE:
                guessArr.push(1);
                break;
            case colors.YELLOW:
                guessArr.push(2);
                break;
            case colors.GREEN:
                guessArr.push(3);
                break;
            case colors.BLUE:
                guessArr.push(4);
                break;
            case colors.VIOLET:
                guessArr.push(5);
                break;
            default:
                break;
        }

        switch (currentGuess.pegThree) {
            case colors.RED:
                guessArr.push(0);
                break;
            case colors.ORANGE:
                guessArr.push(1);
                break;
            case colors.YELLOW:
                guessArr.push(2);
                break;
            case colors.GREEN:
                guessArr.push(3);
                break;
            case colors.BLUE:
                guessArr.push(4);
                break;
            case colors.VIOLET:
                guessArr.push(5);
                break;
            default:
                break;
        }

        switch (currentGuess.pegFour) {
            case colors.RED:
                guessArr.push(0);
                break;
            case colors.ORANGE:
                guessArr.push(1);
                break;
            case colors.YELLOW:
                guessArr.push(2);
                break;
            case colors.GREEN:
                guessArr.push(3);
                break;
            case colors.BLUE:
                guessArr.push(4);
                break;
            case colors.VIOLET:
                guessArr.push(5);
                break;
            default:
                break;
        }

        return guessArr;

    }

    returnPegs(guess, answer) {
        let guessArr = [new Peg(guess[0], 0), new Peg(guess[1], 1), new Peg(guess[2], 2), new Peg(guess[3], 3)];
        let ansArr = [new Peg(answer[0], 0), new Peg(answer[1], 1), new Peg(answer[2], 2), new Peg(answer[3], 3)];
        let pegsRated = 0;
        let numBlack = 0;
        let numWhite = 0;
        let numNull = 0;
        let pegString = "";

        //Rate black pegs
        for (let j = 0; j < 4; j++) {
            if (guessArr[j].color == ansArr[j].color && guessArr[j].rated == false) {
                //color and position matched
                guessArr[j].rated = true;
                ansArr[j].rated = true;
                numBlack = numBlack + 1;
                pegString = pegString + "B";
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
                    pegString = pegString + "W";
                }

            }

        }

        return pegString;
    }

    translateResponseToString(response) {

        let respString = "";

        for (let i = 0; i < response[0]; i++) {
            respString = respString + "B";
        }

        for (let i = 0; i < response[1]; i++) {
            respString = respString + "W";
        }

        return respString;

    }

    prunables(guess, answer, rating) {

        let hits = 0;

        for (let i = 0; i < this.S.solArr.length; i++) {
            let firstParam = this.returnPegs(guess, answer);
            let secondParam = this.translateResponseToString(rating);
            if (this.returnPegs(guess, answer) != this.translateResponseToString(rating)) {
                //S = S - potential guess
                hits++;
            }
        }

        return hits;

    }

    //Solver
    provideGuess() {

        //Play 1122
        if (this.firstRun === true) {
            this.firstRun = false;
            console.log([0, 0, 1, 1]);

            this.guess.pegOne = colors.RED;
            this.guess.pegTwo = colors.RED;
            this.guess.pegThree = colors.ORANGE;
            this.guess.pegFour = colors.ORANGE;

            return [0, 0, 1, 1];
        }

        let theResponses = new Responses;

        let pegArr = this.translateGuess();

        let ratingPegs = this.returnPegs(pegArr, [0, 1, 2, 3]);

        //for s in S
        for (let i = 0; i < this.S.solArr.length; i++) {
            if (this.returnPegs(pegArr, this.S.solArr[i][0]) !== ratingPegs) {
                //S = S - potential guess
                this.S.solArr.splice(i, 1);
            }
        }

        let currMax = 0;

        //For U in U
        for (let j = 0; j < this.S.solArr.length; j++) {
            //for r in Responses
            for (let k = 0; k < theResponses.responseArr.length; k++) {
                //FIX THIS


                //this.S.solArr[j][1] = Math.max(currMax, this.prunables(pegArr, this.S.solArr[j][0], theResponses.responseArr[k]));
                //let thePrunes = this.prunables(pegArr, this.U.solArr[j][0], theResponses.responseArr[k]);
                currMax = Math.max(currMax, this.prunables(pegArr, this.S.solArr[j][0], theResponses.responseArr[k]));
                this.S.solArr[j][1] = currMax;
            }
        }

        let theMin = 1296;
        let candidateSolutions = [];

        for (let k = 0; k < this.S.solArr.length; k++) {
            theMin = Math.min(theMin, this.S.solArr[k][1]);
        }
        
        for (let m = 0; m < this.S.solArr.length; m++) {
            if (this.S.solArr[m][1] == theMin) {
                candidateSolutions.push(this.S.solArr[m]);
                //this.S.solArr.splice(m, 1);
                this.spliceIndex = m;
                m = this.S.solArr.length + 1;
            }
        }

        /*
        for (let n = 0; n < candidateSolutions.length; n++) {
            for (let p = 0; p < this.S.solArr.length; p++) {
                if (candidateSolutions[n][0] == this.S.solArr[p][0]) {
                    console.log("found a candidate in S");
                    console.log(candidateSolutions[n][0]);
                    return candidateSolutions[n][0];
                }
            }
        }
        */
        console.log("no candidate in S");
        this.S.solArr.splice(0, 1);
        console.log(candidateSolutions[0][0]);

        this.assignGuess(candidateSolutions[0][0]);

        return candidateSolutions[0][0];
    }

    
    //don't forget to check that this is the last turn
}

module.exports.Game = Game;
module.exports.Row = Row;
module.exports.colors = colors;
module.exports.jcolors = jcolors;