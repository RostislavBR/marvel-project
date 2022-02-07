<template>
    <div class="comics-grid-item">
        <h3 class="comics-title">{{ comicsTitle | cutLongText(29, '...') }}</h3>
        <div class="comics-grid-image" :style="{ backgroundImage: `url(${ comicsImage.path }.${ comicsImage.extension })` }">
            <router-link :to="{ path: `/comics/${comicsId}` }" class="comics-item-link" :style="{ textDecoration: 'none' }"></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['comicsTitle', 'comicsImage', 'comicsId'],
        name: "ComicsGridItem",
        filters: {
            cutLongText(text, length, suffix) {
                if(text.length > length) {
                    return text.substring(0, length) + suffix;
                } else {
                    return text;
                }
            },
        },
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
        position: relative;
        min-height: 486px;
        box-sizing: border-box;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: $gridItemShadow;
        border: none;
    }
    .comics-item-link {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    @media (max-width: 1024px) {
        
    }
    @media (max-width: 767px) {
        .comics-title {
            font-size: $mobileComicsTitle;
        }
        .comics-grid-image {
            min-height: 200px;
        }
    }
</style>