**Readme for Portfolio Project**
**Andrew Helmsworth**

# Portfolio Project
##**Mastermind Implementation**

URL:
http://flip3.engr.oregonstate.edu:6727/
*NOTE: Must be on the OSU VPN to access this site.

Program Description:

Mastermind is a game for two players. One player, the codemaker, chooses an answer sequence of four code pegs. The pegs are chosen from a set of six colors, and hidden behind a plastic shield. The opposing player, the codebreaker, has twelve guesses to guess the color and order of the code pegs. Each time the codebreaker guesses, the codemaker rates their guess with a series of answer pegs: one black answer peg for each code peg that matches the code peg in the answer sequence in color and position, and one white peg for each unrated code peg that matches a peg in the answer in color but not position.

This program implements a Mastermind game, playable in a web browser, such as Chrome.
--


####**Instructions: Playing Mastermind in a Browser**

This program is intended to be 'played' in a web browser, such as Chrome, by visiting http://flip3.engr.oregonstate.edu:6727/. The program designer has selected a series of four colored code pegs. It's up to you to guess the order and color of those pegs. Repeatedly click the large grey circles on the 'board' on the left to cycle through and select one of 6 colors for each code peg. Then, click 'Guess' to check your guess. The computer will return 4 black, white, or grey answer pegs to the board to 'rate' your guess: one black answer peg for every unrated code peg you guessed that is in the right position and has the right color, one white answer peg for each unrated code peg in your guess of correct color but incorrect position. The remainder of the answer pegs will be grey. If you can guess the sequence in 12 tries or less, you win!

EXTRA CREDIT: The computer will also suggest a guess to you each turn. With the current answer sequence as input, this algorithm solves Mastermind in 5 moves.
--

####**Instructions: Starting a Mastermind Server on Flip**
It is possible to run this program from the command line on flip. To use it, do the following:

0) Connect to a flip server, referring to the ENGR documentation if necessary. NOTE: You must NOT be on flip3 for this functionality to work, otherwise you will have a port conflict with the author's Mastermind server. Please see IS or the ENGR documentation for connecting to flip2 or flip1. For example, the following document describes connecting with Putty; you could follow these instructions but substitute flip1.engr.oregonstate.edu for the Host Name in the screenshots: https://it.engineering.oregonstate.edu/accessing-unix-server-using-putty-ssh.

1) If needed, navigate to the directory where you have downloaded the source code archive using the cd command, e.g. by typing:

cd Helmsworth325Portfolio

and hitting Enter.

2) Unzip the archive. Type the following command:

unzip masterMind-master.zip

and hit Enter.

3) Navigate to the subdirectory created. Type the following:

cd masterMind-master

and hit Enter.

4) Install Node modules. Type the following command:

npm install

and hit Enter. It's safe to ignore the warnings about the repository and license field, in the author's estimation.

5) Start the server. Type the following:

node app.js

and hit Enter. The program will output a message indicating the server is running.

3) In your web browser, navigate to the following URL, substituting the number of the flip server you chose (either 1 or 2) in step 0 of this section for the letter X:

http://flipX.engr.oregonstate.edu:6727/

4) The server is running, and you should be looking at your own instance of a Mastermind game implementation in your web browser. Feel free to ignore the console messages generated in your flip session as you play the game. For instructions on playing the game, please see the section entitled, "Instructions: Playing Mastermind in a Browser" above.

--


This concludes the instructions for this subsection and for the document itself.
