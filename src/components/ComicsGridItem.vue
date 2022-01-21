<template>
    <div class="comics-grid-item">
        <h3 class="comics-title">{{ comicsTitle }}</h3>
        <div class="comics-grid-image" :style="{ backgroundImage: `url(${ comicsImage.path }.${ comicsImage.extension })` }">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['comicsTitle', 'comicsImage'],
        name: "ComicsGridItem",
        mounted() {
            console.log(this.comicsTitle, this.comicsImage)
        }
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
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: $gridItemShadow;
        border: none;
    }
</style>