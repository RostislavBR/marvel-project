<template>
    <div class="character-page-container">
        <CharacterPageHeader :name="info[0].name" :image="info[0].thumbnail" v-if="info && info.length > 0"/>
        <SkeletonCharacter v-else/>
        <div class="character-main">
            <div class="character-biography-box">
                <CharacterMainTitle/>
                <MainText/>
            </div>
            <div class="comics-title-box">
                <CharacterMainTitle/>
            </div>
            <div class="comics-grid-container">
                <ComicsGrid v-if="comics && comics.length > 0">
                    <ComicsGridItem v-for="(comics, i) in comics" :key="comics.id" :comicsTitle="comics.title" :comicsId="comics.id" :comicsImage="comics.thumbnail" :class="['comics-grid-item', `comics-grid-item-${i + 1}`]"/>
                </ComicsGrid>
                <SkeletonComicsGrid v-else>
                    <SkeletonComicsGridItem v-for="comics in comics" :key="comics.id" :comicsTitle="comics.title"/>
                </SkeletonComicsGrid>
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
    import SkeletonCharacter from "@/components/SkeletonCharacter";
    import SkeletonComicsGrid from "@/components/SkeletonComicsGrid";
    import SkeletonComicsGridItem from "@/components/SkeletonComicsGridItem";

    export default {
        name: "CharacterPage",
        components: { SkeletonComicsGrid, SkeletonComicsGridItem, SkeletonCharacter, ComicsGridItem, ComicsGrid, MainText, CharacterMainTitle, CharacterPageHeader },
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
    }
</script>

<style lang="scss">
    .character-page-container {
        display: flex;
        flex-grow: 1;
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
    @media (max-width: 1024px) {
        .character-page-container {
            width: 768px;
        }
        .character-biography-box {
            margin: 0 0 35px 0;
        }
        .comics-title-box {
            margin: 0 0 25px 0;
        }
    }
    @media (max-width: 767px) {
        .character-page-container {
            width: 320px;
        }
        .character-biography-box {
            margin: 0 0 30px 0;
        }
        .comics-title-box{
            margin: 0 0 20px 0;
        }
    }
</style>