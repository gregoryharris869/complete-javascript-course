'use strict';

// Selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Start at zero and players
score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Hide dice.
diceEl.classList.add('hidden');

// Roll dice function
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch player - Set score to Zero.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

// Hold score - Add current score - check score is >= 100- finish game/switch player
btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];
});
