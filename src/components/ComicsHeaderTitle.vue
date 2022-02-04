<template>
    <h1 class="comics-header-name">{{ title }}</h1>
</template>

<script>
    export default {
        name: "ComicsHeaderTitle",
        props: ['title'],
    }
</script>

<style lang="scss">
    .comics-header-name {
        font-size: $characterNameFontSize;
        font-weight: $boldFontWeight;
        line-height: $biggerLineHeight;
        text-transform: uppercase;
    }
</style>