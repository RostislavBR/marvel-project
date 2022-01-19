<template>
    <div class="characters-header-container">
        <h1 class="characters-title">characters</h1>
    </div>
</template>

<script>
    export default {
        name: "CharactersHeader"
    }
</script>

<style lang="scss">
.characters-header-container {
    width: 1278px;
    margin: 0 auto;
}
.characters-title {
    font-size: $bigSize;
    font-weight: $boldFontWeight;
    line-height: $bigLineHeight;
    text-align: start;
    text-transform: uppercase;
    margin: 40px 0;
}
</style>