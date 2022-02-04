<template>
    <div class="comics-grid">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SkeletonComicsGrid",
    }
</script>

<style lang="scss">
    .comics-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-gap: 20px;
        margin: 0 0 20px 0;
    }
</style>