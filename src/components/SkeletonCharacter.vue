<template>
    <div class="character-header">
        <div class="character-box-img-skeleton skeleton">
        </div>
        <div class="character-box-name">
            <span class="character-top-title skeleton-top-title skeleton"></span>
            <SkeletonTitle/>
        </div>
    </div>
</template>

<script>
    import SkeletonTitle from "@/components/SkeletonTitle";
    export default {
        name: "SkeletonAnimationHeader",
        components: { SkeletonTitle,  }
    }
</script>

<style lang="scss" scoped>
    .character-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px;
        margin: 0 0 20px 0;
        background: $boxInputBackground;
    }
    .character-box-img-skeleton {
        min-width: 400px;
        min-height: 400px;
        background: $grey;
        box-shadow: $boxInputShadow;
    }
    .character-box-name {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .skeleton {
        animation: skeleton-loading 1.5s linear infinite alternate;
    }
    .skeleton-top-title {
        display: block;
        background: $lightGrey;
        padding: 10px 0;
        margin: 0 0 15px 0;
        width: 200px;
    }
    @keyframes skeleton-loading {
        0% {
            background-color: $lightGrey;
        }
        100% {
            background-color: $white;
        }
    }

    @media (max-width: 1024px) {
        .character-box-img-skeleton {
            min-width: 250px;
            min-height: 250px;
        }
        .skeleton-top-title {
            width: 200px;
        }
    }

    @media (max-width: 767px) {
        .character-box-img-skeleton {
            min-width: 100px;
            min-height: 100px;
            margin: 0 10px 0 0;
        }

        .skeleton-top-title {
            width: 160px;
        }
    }
</style>