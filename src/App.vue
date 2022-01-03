<template>
  <div id="app">
    <div class="container">
        <Header/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: { Header },
}
</script>

<style lang="scss">
  @font-face {
      font-family: $fontFamily;
      src: url('fonts/Roboto-Light.ttf');
  }

 * {
   font-family: $fontFamily;
   margin: 0;
   padding: 0;
 }
.container {
    width: 1920px;
    height: 100%;
    margin: 0 auto;
}
</style>
