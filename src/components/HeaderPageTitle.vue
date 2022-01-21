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
</style>