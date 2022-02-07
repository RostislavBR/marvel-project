<template>
    <div class="character-header">
        <div class="character-box-img" :style="{ backgroundImage: `url(${image.path}.${image.extension})` }">
        </div>
        <div class="character-box-name">
            <span class="character-top-title">Character</span>
            <HeaderPageTitle :name="name"/>
        </div>
    </div>
</template>

<script>
    import HeaderPageTitle from "@/components/HeaderPageTitle";
    export default {
        props: ['name', 'image'],
        name: "CharacterPageHeader",
        components: { HeaderPageTitle },
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
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: $boxInputShadow;
        margin: 0 40px 0 0;
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
    @media (max-width: 1024px) {
        .character-box-img {
            min-width: 250px;
            min-height: 250px;
            margin: 0 20px 0 0;
        }
        .character-top-title {
            font-size: $buttonSize;
            margin: 0 0 15px 0;
        }
    }
    @media (max-width: 767px) {
        .character-header {
            margin: 0;
        }
        .character-box-img {
            min-width: 100px;
            min-height: 100px;
            margin: 0 20px 0 0;
        }
        .character-top-title {
            font-size: 10px;
            margin: 0 0 10px 0;
        }
    }
</style>