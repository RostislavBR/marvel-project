<template>
    <div class="character-page-container">
        <CharacterPageHeader :name="info[0].name" :image="info[0].thumbnail"/>
        <div class="character-main">
            <div class="character-biography-box">
                <CharacterMainTitle/>
                <MainText/>
            </div>
            <div class="comics-title-box">
                <CharacterMainTitle/>
            </div>
            <div class="comics-grid-container">
                <ComicsGrid v-if="comics">
                    <ComicsGridItem v-for="comics in comics" :key="comics.id" :comicsTitle="comics.title" :comicsImage="comics.thumbnail"/>
                </ComicsGrid>
            </div>
        </div>
    </div>
</template>

<script>
    import CharacterPageHeader from "@/components/CharacterPageHeader";
    import CharacterMainTitle from "@/components/CharacterMainTitle";
    import MainText from "@/components/MainText";
    import ComicsGrid from "@/components/ComicsGrid";
    import ComicsGridItem from "@/components/ComicsGridItem";
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "CharacterPage",
        components: { ComicsGridItem, ComicsGrid, MainText, CharacterMainTitle, CharacterPageHeader },
        methods: {
            ...mapActions(['getCharacterInfo', 'getCharacterComics']),
        },
        computed: {
          getCharacterId() {
              return this.$route.params.id;
          },
          // getComicsNameId() {
          //   return this.comics[0].comics.items.forEach((item, i) => { item.id = i + 1 })
          // },
          ...mapGetters({ info:'getCharacterInfo', comics: 'getComicsInfo'}),
        },
        created() {
            this.getCharacterInfo(this.getCharacterId);
            this.getCharacterComics(this.getCharacterId);
        },
       mounted() {
            console.log(this.comics)
       }
    }
</script>

<style lang="scss">
    .character-page-container {
        display: flex;
        flex-direction: column;
        width: 1238px;
        /*max-height: 832px;*/
        margin: 120px auto 0 auto;
        background: $white;
    }
    .character-main {
        padding: 20px;
    }
    .character-biography-box {
        margin: 0 0 60px 0;
    }
    .comics-title-box {
        margin: 0 0 47px 0;
    }
    .comics-grid-container {
        display: flex;
        flex-direction: row;
    }
</style>