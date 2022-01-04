<template>
    <main class="main">
        <div class="banner-box">
            <div class="search-box">
                <input type="text" class="search-string" placeholder="Captain America, Hulk, Thor...">
                <button class="search-button">search</button>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Main"
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
    padding: 351px 0 359px 0;
    margin: 0 auto;
}
.search-box {
    padding: 20px;
    background-color: $white;
    border-radius: $searchBorderRadius;
    box-shadow: $boxInputShadow;
}
.search-string {
    width: 502px;
    padding: 17px 0 17px 16px;
    margin: 0 20px 0 0;
    background-color: $grey;
    border-radius: $searchBorderRadius;
    border: $inputBorder;
    color: $red;
}
.search-button {
    width: 220px;
    padding: 18px 20px;
    text-align: center;
    background: $red;
    border: none;
    border-radius: $searchBorderRadius;
    color: $white;
    text-transform: uppercase;
    font-size: $buttonSize;
}
</style>