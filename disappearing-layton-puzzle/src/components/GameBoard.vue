<template>
  <div class="chessboard">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <div
        v-for="(piece, colIndex) in row"
        :key="colIndex"
        class="square"
        :class="{ dark: (rowIndex + colIndex) % 2 === 1 }"
        @dragover.prevent
        @drop="handleDrop(rowIndex, colIndex)"
      >
        <div
          v-if="piece"
          class="piece"
          draggable="true"
          @dragstart="handleDragStart(rowIndex, colIndex)"
        >
          {{ piece }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
      ],
      selectedPiece: null,
      selectedPiecePosition: null
    };
  },
  methods: {
    handleDragStart(rowIndex, colIndex) {
      if (this.board[rowIndex][colIndex]) {
        this.selectedPiece = this.board[rowIndex][colIndex];
        this.selectedPiecePosition = { rowIndex, colIndex };
      }
    },
    handleDrop(rowIndex, colIndex) {
      if (this.selectedPiece) {
        this.board[rowIndex].splice(colIndex, 1, this.selectedPiece);
        this.board[this.selectedPiecePosition.rowIndex].splice(this.selectedPiecePosition.colIndex, 1, null);
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
  border: 1px solid #000;
}

.dark {
  background-color: #b58863;
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
