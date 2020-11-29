var express = require('express');
var router = express.Router();
const session = require('express-session');
const { Game, Row, colors, jcolors } = require("../gameClass.js");

const myGame = new Game;

router.get('/', function (req, res, next) {
    sess = req.session;
    let test = myGame.rows;
    res.render('pages/index', {
        results: myGame.rows,
        turn: myGame.turn,
        failure: false,
        victory: false
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
        res.render('pages/index', {
            results: myGame.rows,
            turn: myGame.turn,
            victory: true,
            failure: false
        });
    }
    else if (check == false && myGame.turn < 11) {
        //Can advance to next turn
        myGame.turn = myGame.turn + 1;
        res.render('pages/index', {
            results: myGame.rows,
            turn: myGame.turn,
            victory: false,
            failure: false
        });
    }
    else {
        res.render('pages/index', {
            results: myGame.rows,
            turn: myGame.turn,
            failure: true,
            victory: false
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

    res.render('pages/index', {
        results: myGame.rows,
        turn: myGame.turn,
        failure: false,
        victory: false
    });
    console.log("reloaded");
});

module.exports = router;