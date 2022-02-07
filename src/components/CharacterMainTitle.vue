<template>
    <h2 class="character-biography-title">biography</h2>
</template>

<script>
    export default {
        name: "CharacterMainTitle"
    }
</script>

<style lang="scss">
    .character-biography-title,
    .character-comics-title {
        font-size: $bigSize;
        font-weight: $boldFontWeight;
        line-height: $bigLineHeight;
        text-transform: uppercase;
        color: $characterColor;
    }
    @media (max-width: 1024px) {
        .character-biography-title,
        .character-comics-title {
            font-size: $mobileFontSizeTitle;
            line-height: $middleLineHeight;
        }
    }
    @media (max-width: 767px) {
        .character-biography-title,
        .character-comics-title {
            font-size: $mobileMiddleSize;
            line-height: $middleLineHeight;
        }
    }
</style>