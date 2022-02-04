<template>
    <main class="main">
        <div class="banner-box">
            <SearchString/>
        </div>
        <div>
            <CharactersHeader/>
            <CharactersGrid v-if="characters && characters.length > 0" :characters="characters"/>
            <SkeletonAnimation v-else/>
        </div>
    </main>
</template>

<script>
    import CharactersGrid from "@/components/CharactersGrid";
    import SkeletonAnimation from "@/components/SkeletonAnimation";
    import { mapGetters } from "vuex"
    import CharactersHeader from "@/components/CharactersHeader";
    import SearchString from "@/components/SearchString";

    export default {
        name: "Main",
        components: { SearchString, CharactersHeader, SkeletonAnimation, CharactersGrid },
        computed: {
            ...mapGetters({ characters: 'getCharacters' }),
        },
    }
</script>

<style lang="scss">
    .main {
        width: 100%;
        flex-grow: 1;
    }

    .banner-box {
        display: flex;
        justify-content: center;
        background-image: url('../img/banner.png');
        background-repeat: no-repeat;
        max-height: 800px;
        max-width: 1920px;
        padding: 351px 0 355px 0;
        margin: 0 auto;
    }
</style>