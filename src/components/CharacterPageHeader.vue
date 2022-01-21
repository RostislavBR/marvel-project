<template>
    <div class="character-header">
        <div class="character-box-img" :style="{ backgroundImage: `url(${info[0].thumbnail.path}.${info[0].thumbnail.extension})` }">
        </div>
        <div class="character-box-name">
            <span class="character-top-title">Character</span>
            <HeaderPageTitle :name="info[0].name"/>
        </div>
    </div>
</template>

<script>
    import HeaderPageTitle from "@/components/HeaderPageTitle";
    export default {
        props: ['info'],
        name: "CharacterPageHeader",
        components: { HeaderPageTitle },
        // computed: {
        //   style() {
        //       return {
        //           '--backgroundImage': this.info[0].th
        //       }
        //   }
        // },
        mounted() {
            console.log(this.info);
        }
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
</style>