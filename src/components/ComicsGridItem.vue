<template>
    <div class="comics-grid-item">
        <h3 class="comics-title">{{ comicsTitle | cutLongText(29, '...') }}</h3>
        <div class="comics-grid-image" :style="{ backgroundImage: `url(${ comicsImage.path }.${ comicsImage.extension })` }">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['comicsTitle', 'comicsImage'],
        name: "ComicsGridItem",
        filters: {
            cutLongText(text, length, suffix) {
                if(text.length > length) {
                    return text.substring(0, length) + suffix;
                } else {
                    return text;
                }
            },
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