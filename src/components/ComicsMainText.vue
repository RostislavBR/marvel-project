<template>
    <p class="comics-text">{{ comicsText}}</p>
</template>

<script>
    export default {
        name: "ComicsMainText",
        props: ['comicsText'],
    }
</script>

<style lang="scss">
    .comics-text {
        font-size: $middleSize;
        font-weight: 300;
        line-height: $comicsLineHeight;
        color: $biographyColor;
        margin: 10px 0 0 0;
    }
</style>