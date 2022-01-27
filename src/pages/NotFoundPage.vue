<template>
    <div class="not-found-container">
        <h1 class="not-found-title">Not found</h1>
    </div>
</template>

<script>
    export default {
        name: "NotFoundPage"
    }
</script>

<style lang="scss">
    .not-found-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        width: 100%;
    }
    .not-found-title {
        display: block;
        font-size: $notFoundSize;
        background-color: $notFoundColor;
        color: transparent;
        text-align: center;
        text-shadow: $textShadow;
        -webkit-background-clip: text;
        -moz-background-clip: text;
    }
</style>