<template>
  <div id="app">
    <div class="container">
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";

  export default {
    components: {Footer}
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 1920px;
}
</style>
