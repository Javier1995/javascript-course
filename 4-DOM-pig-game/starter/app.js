/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/**
 *  3 CHALLENGES  
 *  1. A player looses his entire score when he rolls two 6 in a row. After that, it's the next player's turn.
 * (Hint: Always save the the previous dice roll in a separate variable);
 * 
 * 2. Add a input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
 * (Hint: You Can read that value with the .value  property in Javascript. this is a good oportunity to use google to figure this out.)
 * 
 * 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
 * (Hint: You wull need css to position the second dice, so take a look at the css)
 * 
 * */


var scores, roundScore, activePlayer, diceDOM;
init();
var lastDice_0, lastDice_1;

window.document.querySelector('.btn-roll').addEventListener('click', function () {
    //1. random number  
    var dice_0 = Math.floor(Math.random() * 6) + 1;
    var dice_1 = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    console.table(dice_0, dice_1);

    diceDOM[0].style.display = 'block';
    diceDOM[1].style.display = 'block';
    diceDOM[0].src = 'dice-' + dice_0 + '.png';
    diceDOM[1].src = 'dice-' + dice_1 + '.png';


    //3. update the round
    if (dice_0 === 6 && lastDice_0 === 6 || dice_1 === 6 && lastDice_1 === 6) {

        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();

    } else if (dice_0 !== 1 && dice_1 !== 1) {

        roundScore += dice_0 + dice_1;
        window.document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else if (dice_0 === 1 || dice_1 === 1) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else {
        nextPlayer();
    }

    lastDice_0 = dice_0;
    lastDice_1 = dice_1;

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    var $expectedValue = document.querySelector('#score');
    var _winningScore;
    //  add Current score to Global Score
    scores[activePlayer] += roundScore;

    if ($expectedValue.value) {
        _winningScore = $expectedValue.value;
    } else {
        _winningScore = 100;
    }

    //Update the UI

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    //Check if player won the game
    if (scores[activePlayer] >= _winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').setAttribute('disabled', 'disabled');
        document.querySelector('.btn-hold').setAttribute('disabled', 'disabled');

    } else {
        //next player
        nextPlayer();
    }




});


//restart the game
document.querySelector('.btn-new').addEventListener('click', init);

/* Functions for this stupid game that I don't give a fucking shit */
function init() {
    /* Datas */
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    diceDOM = document.querySelectorAll('.dice');

    /* Default inform from the beginning */
    diceDOM[0].style.display = 'none';
    diceDOM[1].style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    /* PLayer text */
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    /* Adding up  and removing classes */
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //enable buttons
    document.querySelector('.btn-roll').removeAttribute('disabled');
    document.querySelector('.btn-hold').removeAttribute('disabled');
}

//Next player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM[0].style.display = 'none';
    diceDOM[1].style.display = 'none';

}