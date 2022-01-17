<template>
    <div class="comics-grid-item">
        <span class="comics-title">Dark Avengers - Ares</span>
        <div class="comics-grid-image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComicsGridItem"
    }
</script>

<style lang="scss">
    .comics-title {
        display: block;
        font-size: $middleSize;
        font-weight: $boldFontWeight;
        line-height: $middleLineHeight;
        color: $biographyColor;
        margin: 0 0 10px 0;
    }
    .comics-grid-image {
        min-height: 486px;
        box-sizing: border-box;
        /*background-size: cover;*/
        /*background-position: center center;*/
        /*background-repeat: no-repeat;*/
        background: $grey;
        box-shadow: $gridItemShadow;
        border: none;
    }
</style>