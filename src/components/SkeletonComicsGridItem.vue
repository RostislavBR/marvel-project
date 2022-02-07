<template>
    <div class="comics-grid-item">
        <span class="comics-title">{{ comicsTitle | cutLongText(29, '...') }}</span>
        <div class="comics-grid-image skeleton">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['comicsTitle'],
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

<style lang="scss" scoped>
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
        background: $grey;
        box-shadow: $gridItemShadow;
        border: none;
    }
    .skeleton {
        animation: skeleton-loading 1.5s linear infinite alternate;
    }
    .skeleton-top-title {
        display: block;
        background: $lightGrey;
        padding: 10px 0;
        margin: 0 0 15px 0;
        width: 200px;
    }
    @keyframes skeleton-loading {
        0% {
            background-color: $lightGrey;
        }
        100% {
            background-color: $white;
        }
    }
</style>