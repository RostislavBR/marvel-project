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
    @media (max-width: 1024px) {
        .comics-header-name {
            font-size: 37px;
            line-height: 50px;
        }
    }
    @media (max-width: 767px) {
        .comics-header-name {
            font-size: 11px;
            line-height: $middleLineHeight;
        }
    }
</style>