<template>
  <div class="gameboard">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <div
        v-for="(piece, colIndex) in row"
        :key="colIndex"
        class="square"
        :class="{ non_empty:piece != null }"
        
        @dragover.prevent
        @drop="handleDrop(rowIndex, colIndex)"
      >
        <div
          v-if="piece === 1"
          class="piece"
          draggable="true"
          @dragstart="handleDragStart($event, rowIndex, colIndex)"
        >
          <img
            :src="getPieceImage(piece)"
            alt="Piece"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: this.getInitalBoard(),
      selectedPiece: null,
      selectedPiecePosition: null,
    };
  },
  props: {
    puzzleId: {
      type: Number,
      required: true 
    }
  },
  methods: {
    getInitalBoard(){
      const sample = require('@/puzzles/puzzle_' + this.puzzleId + '.json'); 
      var puzzle = sample.board;
      // replace -1 by nullS
      puzzle = puzzle.map(arr => arr.map(item => item === -1 ? null : item))
      return puzzle;
    },
    getPieceImage(piece){
      if(piece === 1)
        return require('@/assets/ball.png');
    },
    handleDragStart(event, rowIndex, colIndex) {
      if (this.board[rowIndex][colIndex]) {
        this.selectedPiece = this.board[rowIndex][colIndex];
        this.selectedPiecePosition = { rowIndex, colIndex };
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
        // event.preventDefault(); // Prevent the default behavior
      }
    },
    handleDrop(rowIndex, colIndex) {
      if(
          this.selectedPiece &&
          this.isValidSquare(rowIndex, colIndex)
        ) {
        this.board[rowIndex].splice(colIndex, 1, this.selectedPiece);
        this.board[this.selectedPiecePosition.rowIndex].splice(this.selectedPiecePosition.colIndex, 1, 0);
        this.selectedPiece = null;
        this.selectedPiecePosition = null;
        if (this.isGameOver()){
          this.announceGameOver();
        }
      }
    },
    isGameOver(){
      const countOnes = arr => arr.flat().filter(element => element === 1).length;
      return countOnes(this.board) === 1;
    },
    isValidSquare(rowIndex, colIndex){
      return this.board[rowIndex][colIndex] !== 1 &&
          (rowIndex !== this.selectedPiecePosition.rowIndex || 
          colIndex !== this.selectedPiecePosition.colIndex) &&
          this.thereIsBallBetween(rowIndex, colIndex);
    },
    // if there is a ball, this method will call the method removeBall to remove it
    thereIsBallBetween(rowIndex, colIndex){
      if (Math.abs(this.selectedPiecePosition.rowIndex - rowIndex) === 2 &&
          this.selectedPiecePosition.colIndex - colIndex === 0) {
        const betweenRow = Math.max(this.selectedPiecePosition.rowIndex, rowIndex) - 1;
        if(this.board[betweenRow][colIndex] === 1){
          this.removeBall(betweenRow, colIndex)
          return true;
        }
      }
      else if(this.selectedPiecePosition.rowIndex - rowIndex === 0 &&
        Math.abs(this.selectedPiecePosition.colIndex - colIndex) === 2){
        const betweenCol = Math.max(this.selectedPiecePosition.colIndex, colIndex) - 1;
        if(this.board[rowIndex][betweenCol] === 1){
          this.removeBall(rowIndex, betweenCol)
          return true;
        }
      }
      return false;
    },
    removeBall(rowIndex, colIndex){
      this.board[rowIndex][colIndex] = 0;
    },
    resetBoard(){
      this.board = this.getInitalBoard()
    },
    announceGameOver() {
      this.$emit('gameOver');
    }
  },
  watch: {
    puzzleId: {
      immediate: true,
      handler() {
        this.board = this.getInitalBoard();
      },
    },
  },
};
</script>

<style scoped>
.gameboard {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 400px;
  margin: 0 auto; /* Center the board */
  background-image: url('@/assets/background_table_square.png');
  background-size: cover;
  background-position: center;
  padding: 10%;
  opacity: 1;
}

.row {
  display: flex;
}

.square {
  width: 14.28%; /* Adjust the square size based on the board size --> 1/7 */
  height: 14.28%;
  padding-top: 14.28%;
  padding-left: 14.28%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  
}

.square img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  object-fit: contain; /* Maintain the aspect ratio while fitting */
}

.non_empty{
  background-image: url('@/assets/background_square.png');
  background-size: cover; 
}

.piece {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  user-select: none;
}
</style>
