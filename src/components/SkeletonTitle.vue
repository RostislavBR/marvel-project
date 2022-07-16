<template>
    <h1 class="skeleton-name"></h1>
</template>

<script>
    export default {
        name: "SkeletonTitle"
    }
</script>

<style lang="scss">
    .skeleton-name {
        background: $lightGrey;
        padding: 15px 0;
        width: 576px;
    }

    @media (max-width: 767px) {
        .skeleton-name {
            width: 180px;
            padding: 10px 0;
        }
    }
</style>