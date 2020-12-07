var express = require('express');
var router = express.Router();
const session = require('express-session');
const { Game, Row, colors, jcolors } = require("../gameClass.js");

const myGame = new Game;

router.get('/', function (req, res, next) {
    sess = req.session;
    let test = myGame.rows;

    myGame.provideGuess();

    res.render('pages/index', {
        results: myGame.rows,
        turn: myGame.turn,
        failure: false,
        victory: false,
        guess: myGame.guess
    });
    console.log("reloaded");
});


router.post('/submitGuess', function (req, res, next) {
    sess = req.session;
    let test = myGame.rows;

    //Process guess here
    var { pegOne, pegTwo, pegThree, pegFour } = req.body;

    //Assign the colors from the request
    myGame.rows[myGame.turn].pegOne = pegOne;
    myGame.rows[myGame.turn].pegTwo = pegTwo;
    myGame.rows[myGame.turn].pegThree = pegThree;
    myGame.rows[myGame.turn].pegFour = pegFour;

    //Check this row
    let check = myGame.checkGuess();

    if (check == true) {

        myGame.guess.pegOne = colors.NULL;
        myGame.guess.pegTwo = colors.NULL;
        myGame.guess.pegThree = colors.NULL;
        myGame.guess.pegFour = colors.NULL;

        res.render('pages/index', {
            results: myGame.rows,
            turn: myGame.turn,
            victory: true,
            failure: false,
            guess: myGame.guess
        });
    }
    else if (check == false && myGame.turn < 11) {
        //Can advance to next turn
        //Provide the computer's guess
        myGame.provideGuess();

        //Advance and render
        myGame.turn = myGame.turn + 1;
        res.render('pages/index', {
            results: myGame.rows,
            turn: myGame.turn,
            victory: false,
            failure: false,
            guess: myGame.guess
        });
    }
    else {

        myGame.guess.pegOne = colors.RED;
        myGame.guess.pegTwo = colors.ORANGE;
        myGame.guess.pegThree = colors.YELLOW;
        myGame.guess.pegFour = colors.GREEN;

        res.render('pages/index', {
            results: myGame.rows,
            turn: myGame.turn,
            failure: true,
            victory: false,
            guess: myGame.guess
        });
    }

    console.log("reloaded");
});

//Route for setting a new game
router.post('/resetGame', function (req, res, next) {
    sess = req.session;
    let test = myGame.rows;

    //reset the game 
    myGame.reset();

    myGame.provideGuess();

    res.render('pages/index', {
        results: myGame.rows,
        turn: myGame.turn,
        failure: false,
        victory: false,
        guess: myGame.guess
    });
    console.log("reloaded");
});

module.exports = router;