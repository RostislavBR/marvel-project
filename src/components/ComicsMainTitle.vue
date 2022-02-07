<template>
    <h2 class="comics-main-title">Description comics</h2>
</template>

<script>
    export default {
        name: "ComicsMainTitle"
    }
</script>

<style lang="scss">
    .comics-main-title {
        font-size: $bigSize;
        font-weight: $boldFontWeight;
        line-height: $bigLineHeight;
        text-transform: uppercase;
        color: $characterColor;
    }
    @media (max-width: 1024px) {

    }
    @media (max-width: 767px) {
        .comics-main-title {
            font-size: $mobileFontSizeTitle;
            line-height: $middleLineHeight;
        }
    }
</style>