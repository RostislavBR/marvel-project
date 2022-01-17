<template>
    <div class="character-page-container">
        <CharacterPageHeader/>
        <div class="character-main">
            <div class="character-biography-box">
                <CharacterMainTitle/>
                <MainText/>
            </div>
            <div class="comics-title-box">
                <CharacterMainTitle/>
            </div>
            <div class="comics-grid-container">
                <ComicsGrid>
                    <ComicsGridItem v-for="item in 3" :key="item.id"/>
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

    export default {
        name: "CharacterPage",
        components: { ComicsGridItem, ComicsGrid, MainText, CharacterMainTitle, CharacterPageHeader }
    }
</script>

<style lang="scss">
    .character-page-container {
        display: flex;
        flex-direction: column;
        width: 1238px;
        /*max-height: 832px;*/
        margin: 0 auto;
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