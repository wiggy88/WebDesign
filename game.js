$(document).ready(function() {
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  $('#rock-btn, #paper-btn, #scissors-btn').on('click', function() {
    const playerSelection = $(this).attr('id').split('-')[0];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    $('#result').text(result);
  });
});
