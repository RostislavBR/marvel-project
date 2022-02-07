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
        .comics-main-title {
            font-size: 25px;
            line-height: $middleLineHeight;
        }
    }
    @media (max-width: 767px) {
        .comics-main-title {
            font-size: 11px;
            line-height: 10px;
        }
    }
</style>