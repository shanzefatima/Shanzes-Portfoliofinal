document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  let gameState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let currentPlayer = 'X'; // AI starts first

  const winningMoves = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
  ];

  function checkForWin(player) {
      return winningMoves.some(combination => {
          return combination.every(index => {
              return gameState[index] === player;
          });
      });
  }

  function checkForDraw() {
      return gameState.every(cell => cell !== ' ');
  }

  function aiMove() {
      let bestMove = getBestMove();
      gameState[bestMove] = 'X';
      cells[bestMove].textContent = 'X';

      if (checkForWin('X')) {
          setTimeout(() => {
              alert('Shanze wins!');
              showAboutModal();
              resetGame();
          }, 300);
      } else if (checkForDraw()) {
          setTimeout(() => {
              alert('Draw!');
              showAboutModal();
              resetGame();
          }, 300);
      } else {
          currentPlayer = 'O';
      }
  }

  function getBestMove() {
      let bestScore = -Infinity;
      let move;
      for (let i = 0; i < gameState.length; i++) {
          if (gameState[i] === ' ') {
              gameState[i] = 'X';
              let score = minimax(gameState, 0, false);
              gameState[i] = ' ';
              if (score > bestScore) {
                  bestScore = score;
                  move = i;
              }
          }
      }
      return move;
  }

  function minimax(board, depth, isMaximizing) {
      if (checkForWin('X')) return 10 - depth;
      if (checkForWin('O')) return depth - 10;
      if (checkForDraw()) return 0;

      if (isMaximizing) {
          let bestScore = -Infinity;
          for (let i = 0; i < board.length; i++) {
              if (board[i] === ' ') {
                  board[i] = 'X';
                  let score = minimax(board, depth + 1, false);
                  board[i] = ' ';
                  bestScore = Math.max(score, bestScore);
              }
          }
          return bestScore;
      } else {
          let bestScore = Infinity;
          for (let i = 0; i < board.length; i++) {
              if (board[i] === ' ') {
                  board[i] = 'O';
                  let score = minimax(board, depth + 1, true);
                  board[i] = ' ';
                  bestScore = Math.min(score, bestScore);
              }
          }
          return bestScore;
      }
  }

  function playerMove(index) {
      if (gameState[index] === ' ' && currentPlayer === 'O') {
          gameState[index] = 'O';
          cells[index].textContent = 'O';

          if (checkForWin('O')) {
              setTimeout(() => {
                  alert('Player wins!');
                  showAboutModal();
                  resetGame();
              }, 300);
          } else if (checkForDraw()) {
              setTimeout(() => {
                  alert('Draw!');
                  showAboutModal();
                  resetGame();
              }, 300);
          } else {
              currentPlayer = 'X';
              aiMove();
          }
      }
  }

  function resetGame() {
      gameState.fill(' ');
      cells.forEach(cell => cell.textContent = '');
      currentPlayer = 'X'; // AI starts first
      aiMove(); // AI makes the first move
  }

  function showAboutModal() {
      $('#about-modal').modal('show');
  }

  cells.forEach((cell, index) => {
      cell.addEventListener('click', () => playerMove(index));
  });

  document.querySelector('#restart-game-btn').addEventListener('click', resetGame);

  $('#game-modal').on('hidden.bs.modal', resetGame);

  // Initial AI move on page load
  aiMove();
});