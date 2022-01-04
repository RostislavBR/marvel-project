<template>
    <div class="characters-container">
        <h2 class="characters-title">characters</h2>
        <div class="characters-grid">
            <div :class="['grid-item', `grid-item-${i + 1}`]" v-for="(item, i) in 14" :key="item.id">{{i}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CharactersGrid"
    }
</script>

<style lang="scss">
    .characters-container {
        display: flex;
        flex-direction: column;
        width: 1238px;
        /*max-height: 832px;*/
        margin: 0 auto;
        padding: 20px;
        background: $white;
    }
    .characters-title {
        font-size: $bigSize;
        font-weight: $boldFontWeight;
        color: $characterColor;
        text-transform: uppercase;
        margin: 40px 0 36px 0;
    }
    .characters-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        /*grid-template-rows: repeat(6, 1fr);*/
        grid-gap: 20px;
    }
    .grid-item {
        background: $grey;
        border: 2px solid $black;
        font-size: $bigSize;
        text-align: center;
        color: $boxInputBackground;
        border: none;
        box-shadow: $gridItemShadow;
        min-width: 183px;
        min-height: 183px;
    }
    .grid-item-1 {
        grid-column: span 2;
        grid-row: span 2;
    }
    .grid-item-4 {
        grid-column: span 2;
    }
    .grid-item-5 {
        grid-column: span 2;
    }
    .grid-item-10 {
        grid-column: span 2;
    }
    .grid-item-11 {
        grid-column: span 2;
        grid-row: span 2;
    }
    .grid-item-12 {
        grid-column: span 2;
    }
</style>