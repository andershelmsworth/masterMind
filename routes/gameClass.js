const colors = {
    RED: 'red',
    YELLOW: 'yellow',
    ORANGE: 'orange',
    GREEN: 'green',
    BLUE: 'blue',
    VIOLET: 'violet',
    NULL: 'null'
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
        let rowArr = {};
        this.rows = rowArr;

        for (let i = 0; i < 12; i++) {
            this.rows[i] = new Row;
        }
        this.won = false;
    }

    // Getter
    get won() {
        return this.won;
    }

    reset() {
        let rowArr = {};
        this.rows = rowArr;

        for (let i = 0; i < 12; i++) {
            this.rows[i] = new Row;
        }
        this.won = false;
    }

}

module.exports.Game = Game;
module.exports.Row = Row;
module.exports.colors = colors;
module.exports.jcolors = jcolors;