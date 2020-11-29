var express = require('express');
var router = express.Router();
const session = require('express-session');
const { Game, Row, colors, jcolors } = require("../gameClass.js");

const myGame = new Game;

router.get('/', function (req, res, next) {
    sess = req.session;
    let test = myGame.rows;
    res.render('pages/index', {
        results: myGame.rows
    });
    console.log("reloaded");
});

module.exports = router;