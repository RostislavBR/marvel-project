<template>
    <div class="comics-grid-item">
        <span class="comics-title">Dark Avengers - Ares</span>
        <div class="comics-grid-image skeleton">
        </div>
    </div>
</template>

<script>
    export default {
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