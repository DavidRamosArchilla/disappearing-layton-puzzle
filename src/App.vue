<template>
  <div class="container">
    <Dialog v-model:visible="isGameOver" position="top" modal header="Well Done!" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    <div class="left-side" :style="backgroundStyle">
      <div class="content">
        <GameBoard ref="gameBoard" @gameOver="handleGameOver"/>
      </div>
    </div>
    <div class="right-side">
      <div class="image-container">
        <img src="@/assets/layton_sign.png" alt="Image" class="sign"/>
      </div>
      <div>
        <h2>Rules: </h2>
        <p>
           Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </div>
      <div class="buttons_container">
        <Button label="Reset board" @click="resetBoard" :style="{ backgroundColor: '#3e61a3', color: '#fff', marginRight: '10px' }" class="p-mr-2"/>
        <Dropdown class="puzzle_selector" :options="dropdownOptions" v-model="selectedOption" optionLabel="label" placeholder="Puzzle 1"/>
      </div>
    </div>
  </div>
  <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    </p>
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
        { label: 'Puzzle 1', value: '1' },
        { label: 'Puzzle 2', value: '2' },
        { label: 'Puzzle 3', value: '3' }
      ],
      selectedOption: { label: 'Puzzle 1', value: '1' },
    };
  },
  computed: {
    backgroundStyle() {
      const backgroundYPosition = `calc(-${this.scrollPosition}px / 7)`;
      return {
        background: `url('long_layton_background_2.jpg') no-repeat center ${backgroundYPosition}`,
        backgroundSize: 'cover',
        // "background-size": "80%",
        // opacity: 0.5
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.isGameOver);
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
      console.log(this.isGameOver);
      console.log(this.selectedOption.value);
    }
  }
};
</script>

<style scoped>
@import './global_styles.css';

.container{
  display: flex;
  min-height: 150vh;
  background-color: #4f300d;
}

.left-side {
  width: 50%;
  /*float: left;*/
  position: relative;
}

.content {
  position: absolute;
  top: 40%;
  width: 100%;
}

.right-side {
  width: 50%;
  /*float: right;*/
  flex-wrap: wrap;
  flex-flow: col wrap;
  color: #f9e3ba;
  display: flex;
  justify-content: center;
  align-items: top;
}

.sign {
  width: 100%; /* Make the image responsive */
  height: auto;
  margin-top: 100px;
}

.button_reset{
  background-color: #3e61a3;
}

</style>