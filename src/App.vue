<template>
  <div id="app">
      <Header/>
      <Main/>
      <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";
  import Header from "@/components/Header";
  import Main from "@/components/Main";
  import { mapActions  } from "vuex";

  export default {
    components: { Main, Footer, Header },
    methods: {
        ...mapActions(['getCharacters']),
    },
    created() {
        this.getCharacters();
    },
  }
</script>

<style lang="scss">
  @font-face {
      font-family: $fontFamily;
      src: url('fonts/Roboto-Light.ttf');
  }
  @font-face {
      font-family: $fontFamily;
      src: url('fonts/Roboto-Bold.ttf');
  }
 * {
   font-family: $fontFamily;
   margin: 0;
   padding: 0;
 }
body, html {
    width: 100%;
    height: 100%;
    background-color: $grey;
}
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}
</style>
