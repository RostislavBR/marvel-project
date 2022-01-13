<template>
    <div class="character-page-container">
        <div class="character-header">
            <div class="character-box-img">
                <img src="" alt="">
            </div>
            <div class="character-box-name">
                <span class="character-top">Character</span>
                <h1 class="character-header-name">Ares</h1>
            </div>
        </div>
        <div class="character-main">
            <div class="character-biography-box">
                <h2 class="character-biography-title">biography</h2>
                <span class="character-biography-sub-title">Here will be character description from API</span>
            </div>
            <div>
                <h2 class="character-comics-title">comics</h2>
            </div>
            <div class="comics-grid-container">
                <div class="comics-grid">
                    <div>
                        <span class="comics-title">Dark Avengers - Ares</span>
                        <div class="comics-grid-item">
                        </div>
                    </div>
                    <div>
                        <span class="comics-title">Dark Avengers - Ares</span>
                        <div class="comics-grid-item">
                        </div>
                    </div>
                    <div>
                        <span class="comics-title">Dark Avengers - Ares</span>
                        <div class="comics-grid-item">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CharacterPage"
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
    .character-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px;
        margin: 0 0 20px 0;
        background: $boxInputBackground;
    }
    .character-box-img {
        min-width: 400px;
        min-height: 400px;
        background: $grey;
        box-shadow: $boxInputShadow;
    }
    .character-box-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 67%;
    }
    .character-top {
        display: block;
        font-size: $middleSize;
        font-weight: $lightFontWeight;
        line-height: $middleLineHeight;
        margin: 0 0 30px 0;
    }
    .character-header-name {
        font-size: $characterNameFontSize;
        font-weight: $boldFontWeight;
        line-height: $bigLineHeight;
        text-transform: uppercase;
    }
    .character-main {
        padding: 20px;
    }
    .character-biography-box {
        margin: 0 0 60px 0;
    }
    .character-biography-title,
    .character-comics-title {
        font-size: $bigSize;
        font-weight: $boldFontWeight;
        line-height: $bigLineHeight;
        text-transform: uppercase;
        color: $characterColor;
    }
    .character-biography-title {
        margin: 0 0 10px 0;
    }
    .character-biography-sub-title {
        font-size: $middleSize;
        font-weight: 300;
        line-height: $middleLineHeight;
        color: $biographyColor;
    }
    .character-comics-title {
        margin: 0 0 47px 0;
    }
    .comics-grid-container {
        display: flex;
        flex-direction: row;
    }
    .comics-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-gap: 20px;
    }
    .comics-grid-item {
        min-height: 486px;
        box-sizing: border-box;
        /*background-size: cover;*/
        /*background-position: center center;*/
        /*background-repeat: no-repeat;*/
        background: $grey;
        box-shadow: $gridItemShadow;
        border: none;

    }
    .comics-title {
        display: block;
        font-size: $middleSize;
        font-weight: $boldFontWeight;
        line-height: $middleLineHeight;
        color: $biographyColor;
        margin: 0 0 10px 0;
    }
</style>