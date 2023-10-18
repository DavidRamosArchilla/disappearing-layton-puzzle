<template>
  <div class="container">
    <div class="left-side" :style="backgroundStyle">
      
      <div class="content">
        <GameBoard class="board" />
      </div>
       
    </div>
    <div class="right-side">
      <div class="image-container">
        <img src="@/assets/layton_sign.png" alt="Image" class="sign"/>
      </div>
    </div>
  </div>
  <p> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    </p>
    
</template>

<script>
import GameBoard from './components/GameBoard.vue';

export default {
  
  components: {
    GameBoard
  },
  data() {
    return {
      scrollPosition: 0
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
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>

<style scoped>
@import './global_styles.css';

.container{
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
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
  color: white;
  display: flex;
  justify-content: center;
}

.sign {
  width: 100%; /* Make the image responsive */
  height: auto;
  margin-top: 100px;
}
</style>