<template>
  <div class="chessboard">
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
          <!-- {{ piece }} -->
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
      selectedPiecePosition: null
    };
  },
  methods: {
    getInitalBoard(){
      const sample = require('@/puzzles/puzzle_1.json'); 
      var puzzle = sample.board;
      puzzle = puzzle.map(arr => arr.map(item => item === -1 ? null : item))
      // return [
      //   ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      //   ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      //   Array(8).fill(null),
      //   Array(8).fill(null),
      //   Array(8).fill(null),
      //   Array(8).fill(null),
      //   ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      //   ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
      // ];
      return puzzle;
    },
    getPieceImage(piece){
      if(piece === 1)
        return require('@/assets/logo.png');
      // else
      //   return require('@/assets/back.png');
      
    },
    handleDragStart(event, rowIndex, colIndex) {
      if (this.board[rowIndex][colIndex]) {
        this.selectedPiece = this.board[rowIndex][colIndex];
        this.selectedPiecePosition = { rowIndex, colIndex };
        event.dataTransfer.effectAllowed = 'move'; // Specify the effect
        event.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
        // event.preventDefault(); // Prevent the default behavior
      }
    },
    handleDrop(rowIndex, colIndex) {
      if (this.selectedPiece && (this.board[rowIndex][colIndex] != null)) {
        this.board[rowIndex].splice(colIndex, 1, this.selectedPiece);
        this.board[this.selectedPiecePosition.rowIndex].splice(this.selectedPiecePosition.colIndex, 1, 0);
        this.selectedPiece = null;
        this.selectedPiecePosition = null;
      }
    }
  }
};
</script>

<style scoped>
.chessboard {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.square {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #000;
   background-image: url('@/assets/back.png');
  background-size: cover; */
}

.square img {
  width: 100%; /* Ensure the image fills the square */
  height: 100%; /* Ensure the image fills the square */
  object-fit: contain; /* Maintain the aspect ratio while fitting */
}

/*.dark {
  background-color: #b58863;
}*/

.non_empty{
  background-image: url('@/assets/back.png');
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
