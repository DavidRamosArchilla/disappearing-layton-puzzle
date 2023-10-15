<template>
  <div class="chessboard">
    <div v-for="row in 7" :key="row" class="row">
      <div v-for="col in 7" :key="col" class="square" :class="{ dark: isDarkSquare(row, col) }">
        <!-- {{ getPiece(row, col) }} -->
        <img :src="getPieceImage()" alt="Chess Piece" draggable="false"/>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isDarkSquare(row, col) {
      return (row + col) % 2 === 1;
    },
    getPiece(row, col) {
      // Return a piece for demonstration (use your own piece representation)
      // For simplicity, we'll use the same piece for every square
      // val a = row + col;
      return row + col + '♛'; // Queen (Unicode representation)
    },
    getPieceImage() {
      // Return the image URL for a piece (use your own piece representation)
      // For simplicity, we'll use the same image for every square
      return require('@/assets/logo.png'); // Adjust the path and piece image names accordingly
    }
  }
};
</script>

<style scoped>
.chessboard {
  display: grid;
  grid-template-columns: repeat(8, 50px);
  grid-template-rows: repeat(8, 50px);
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 50px;
  height: 50px;
  user-select: none; /* Disable text selection for the square */
}

.square img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none; /* Disable text selection for the image */
}

.dark {
  background-color: gray;
  color: white;
}

.chessboard::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
</style>
