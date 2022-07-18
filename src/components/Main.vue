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
        background-position: center;
        max-height: 800px;
        width:100%;
        padding: 351px 0 355px 0;
        margin: 0 auto;
    }
    @media (max-width: 1024px) {
        .banner-box {
            background-size: cover;
            padding: 150px 0;
            margin: 75px auto 0 auto;
        }
    }
    @media (max-width: 767px) {
        .banner-box {
            background-size: cover;
            padding: 100px 0;
            margin: 75px auto 0 auto;
        }
    }

</style>