<template>
  <div>
    <h1>Connect-4 Game</h1>
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from './components/GameBoard.vue';

export default {
  components: {
    GameBoard
  },
  data() {
    return {
      board: Array(42).fill(null), // 7x6 Connect-4 board
      currentPlayer: 'red',
      gameOver: false
    };
  },
  methods: {
    dropPiece(columnIndex) {
      // Implement the logic to drop a piece into the column
      // Update the board, check for a win, and switch players
      console.log('Piece dropped in column', columnIndex);
    }
  }
};
</script>

<style>
/* Add your CSS styles */
</style>
