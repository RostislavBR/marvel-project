<template>
    <h1 class="character-header-name">{{ name }}</h1>
</template>

<script>
    export default {
        name: "HeaderPageTitle",
        props: ['name'],
    }
</script>

<style lang="scss">
    .character-header-name {
        font-size: $characterNameFontSize;
        font-weight: $boldFontWeight;
        line-height: $biggerLineHeight;
        text-transform: uppercase;
    }
    @media (max-width: 1024px) {
        .character-header-name {
            font-size: 70px;
            line-height: 55px;
        }
    }
    @media (max-width: 767px) {
        .character-header-name {
            font-size: $mobileFontSizeTitle;
            line-height: $middleLineHeight;
        }
    }
</style>