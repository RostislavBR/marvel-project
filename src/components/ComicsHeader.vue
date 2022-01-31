<template>
    <div class="comics-header">
        <div class="comics-box-img" :style="{ backgroundImage: `url(${ comicsImage.path }.${ comicsImage.extension })` }">
        </div>
        <div class="comics-box-name">
            <ComicsHeaderTitle :title="comicsTitle"/>
        </div>
    </div>
</template>

<script>
    import ComicsHeaderTitle from "@/components/ComicsHeaderTitle";

    export default {
        name: "ComicsHeader",
        props: ['comicsImage', 'comicsTitle'],
        components: { ComicsHeaderTitle },
    }
</script>

<style lang="scss">
    .comics-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px;
        margin: 0 0 20px 0;
        background: $boxInputBackground;
    }
    .comics-box-img {
        min-width: 400px;
        min-height: 400px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: $boxInputShadow;
        margin: 0 40px 0 0;
    }
    .comics-box-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 67%;
    }
</style>