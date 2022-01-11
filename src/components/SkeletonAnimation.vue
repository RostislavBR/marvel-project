<template>
    <div class="characters-container">
        <div class="characters-grid">
            <div :class="['grid-item', `grid-item-${i + 1}`, 'skeleton']" v-for="(item, i) in 14" :key="item.id">
                <span class="characters-name skeleton-name"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkeletonAnimation"
    }
</script>

<style lang="scss">
.skeleton {
    animation: skeleton-loading 1.5s linear infinite alternate;
}
.skeleton-name {
    background: $grey;
    padding: 10px 0;
    width: 120px;
}
@keyframes skeleton-loading {
    0% {
        background-color: $grey;
    }
    100% {
        background-color: $white;
    }
}    
</style>