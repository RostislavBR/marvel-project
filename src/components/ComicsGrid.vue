<template>
    <div class="comics-grid">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "ComicsGrid"
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
    @media (max-width: 1024px) {

    }
    @media (max-width: 767px) {
        .comics-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>