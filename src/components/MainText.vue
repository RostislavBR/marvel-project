<template>
    <p class="character-biography-sub-title">Here will be character description from API</p>
</template>

<script>
    export default {
        name: "MainText"
    }
</script>

<style lang="scss">
    .character-biography-sub-title {
        font-size: $middleSize;
        font-weight: 300;
        line-height: $middleLineHeight;
        color: $biographyColor;
        margin: 10px 0 0 0;
    }

    @media (max-width: 1024px) {
        .character-biography-sub-title {
            font-size: 15px;
        }
    }
    @media (max-width: 767px) {
        .character-biography-sub-title {
            font-size: 14px;
        }
    }
</style>