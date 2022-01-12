<template>
    <div class="characters-container">
        <div class="characters-grid">
            <div :class="['grid-item', `grid-item-${i + 1}`]" v-for="({id, name, thumbnail}, i) in characters" :key="id" :style="{backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`, color: '#000000' }">
                <router-link :to="{name: 'character', path: `/character/${id}`, params: { id } }">
                    <span class="characters-name">{{ name }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CharactersGrid",
        props: ['characters'],
    }
</script>

<style lang="scss">
    .characters-container {
        display: flex;
        flex-direction: column;
        width: 1238px;
        /*max-height: 832px;*/
        margin: 0 auto;
        padding: 20px;
        background: $white;
    }
    .characters-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        /*grid-template-rows: repeat(6, 1fr);*/
        grid-gap: 20px;
    }
    .grid-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 20px;
        box-sizing: border-box;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border: 2px solid $black;
        font-size: $bigSize;
        text-align: center;
        color: $boxInputBackground;
        border: none;
        box-shadow: $gridItemShadow;
        min-width: 183px;
        min-height: 183px;
    }
    .grid-item-1 {
        grid-column: span 2;
        grid-row: span 2;
    }
    .grid-item-4 {
        grid-column: span 2;
    }
    .grid-item-5 {
        grid-column: span 2;
    }
    .grid-item-10 {
        grid-column: span 2;
    }
    .grid-item-11 {
        grid-column: span 2;
        grid-row: span 2;
    }
    .grid-item-12 {
        grid-column: span 2;
    }
    .characters-name {
        display: block;
        width: 100%;
        text-align: left;
        font-size: $characterSize;
        font-weight: $bolderFontWeight;
        color: $white;
    }
</style>