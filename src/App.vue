<template>
  <div class="container">
    <Dialog v-model:visible="isGameOver" position="top" modal header="Well Done!" :style="{ width: '50vw' }">
      <p>
        You have solved the puzzle! Now, you can try to solve the rest of the puzzles, good luck with them.
      </p>
    </Dialog>
    <div class="left-side" >
      <div class="image-container">
        <img src="@/assets/layton_sign.png" alt="Image" class="sign"/>
      </div>
      <div class="rules">
        <h2>How to play </h2>
        <p>
          The rules are simple--you can move any ball on the board below as long as it satisfies the following conditions:
        </p>
        <ul>
          <li>
            To move, jump your selected ball over an adjacent space occupied by another ball into an empty space on the other side. You can't jump diagonally.
          </li>
          <li>
            Once you've made the jump, the ball you jumped over disappears from the board.
          </li>
          <li>
            To complete the puzzle, you must remove all balls from the board except for one.
          </li>
        </ul>
        <p>OK, enough rules. Try for yourself!</p>  
      </div>
      <div class="buttons_container">
        <Button label="Reset board" @click="resetBoard" :style="{ backgroundColor: '#3e61a3', color: '#fff', marginRight: '10px' }" class="p-mr-2"/>
        <Dropdown class="puzzle_selector" :options="dropdownOptions" v-model="selectedOption" optionLabel="label" placeholder="Puzzle 1"/>
      </div>
    </div>
    <div class="right-side" :style="backgroundStyle">
      
      <div class="content">
        <GameBoard ref="gameBoard" @gameOver="handleGameOver" :puzzleId="selectedOption.value"/>
      </div>
    </div>
  </div>
  <footer>
    <div class="footer-content">
      <p>See this project on <a href="https://github.com/DavidRamosArchilla/disappearing-layton-puzzle" target="_blank">GitHub</a></p>
    </div>
  </footer>
</template>

<script>
import GameBoard from './components/GameBoard.vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';

export default {
  
  components: {
    GameBoard,
    Button,
    Dialog,
    Dropdown,
  },
  data() {
    return {
      isGameOver: false,
      scrollPosition: 0,
      dropdownOptions: [
        { label: 'Puzzle 1', value: 1 },
        { label: 'Puzzle 2', value: 2 },
        { label: 'Puzzle 3', value: 3 },
        { label: 'Puzzle 4', value: 4 },
        { label: 'Puzzle 5', value: 5 },
        { label: 'Puzzle 6', value: 6 },
      ],
      selectedOption: { label: 'Puzzle 1', value: 1 },
    };
  },
  computed: {
    backgroundStyle() {
      const backgroundYPosition = `calc(-${this.scrollPosition}px / 5)`;
      return {
        background: `url('layton_background.jpg') no-repeat center ${backgroundYPosition}`,
        backgroundSize: 'cover',
        // "background-size": "80%",
        // opacity: 0.5
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
    resetBoard() {
      this.$refs.gameBoard.resetBoard();
      this.isGameOver = false;
    },
    handleGameOver() {
      this.isGameOver = true;
    }
  }
};
</script>

<style scoped>
@import './global_styles.css';

.container{
  display: flex;
  min-height: 150vh;
  padding-bottom: -105%;
  background-color: #4f483b;
}

.left-side {
  width: 50%;
  flex-direction: column; /* Stack items vertically */
  color: #f9e3ba;
  display: flex;
  justify-content: flex-start; /* Align items to the top of the container */
  align-items: center;
}

.content {
  position: absolute;
  top: 40%;
  width: 100%;
}

.right-side {
  width: 50%;
  position: relative;
}

.sign {
  width: 100%;
  height: auto;
  margin-top: 100px;
}

.button_reset{
  background-color: #3e61a3;
}

@media (max-width: 768px) {
  .container {
   display: flex;
    flex-direction: column;
    align-items: center;
  }

  .left-side,
  .right-side {
    width: 100%;
    height: 100vh;
  }
}

.rules{
  margin: 40px 20px 0 20px;
}

.buttons_container{
  margin-top: 40px;
}

footer {
  background-color: #2f2b23;
  color: #f9e3ba;
  text-align: center;
  padding: 10px 0;
}

/* Style the link in the footer */
footer a {
  color: #f9e3ba;
  text-decoration: none;
}

/* On hover, change the color of the link */
footer a:hover {
  color: #958870;
}
</style>