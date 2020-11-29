var express = require('express');
var router = express.Router();
const session = require('express-session');
const { Game, Row, colors, jcolors } = require("./gameClass.js");

const myGame = new Game;

router.get('/index', function (req, res, next) {
    sess = req.session;
    // 	// IF ENV.LOGGEDIN == TRUE
    // 	// 	res.render('pages/dashboard');
    // 	// ELSE
    // 	//     res.render('pages/index');
    
    myGame();
    res.render('pages/index', {
        results: myGame
    });
    console.log("reloaded");
});

module.exports = router;