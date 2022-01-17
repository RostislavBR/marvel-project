<template>
    <div class="character-header">
        <div class="character-box-img">
            <img src="" alt="">
        </div>
        <div class="character-box-name">
            <span class="character-top-title">Character</span>
            <HeaderPageTitle/>
        </div>
    </div>
</template>

<script>
    import HeaderPageTitle from "@/components/HeaderPageTitle";
    export default {
        name: "CharacterPageHeader",
        components: { HeaderPageTitle }
    }
</script>

<style lang="scss">
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
    .character-top-title {
        display: block;
        font-size: $middleSize;
        font-weight: $lightFontWeight;
        line-height: $middleLineHeight;
        margin: 0 0 30px 0;
    }
</style>