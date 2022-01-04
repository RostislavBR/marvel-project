<template>
    <header class="header">
        <div class="header-container">
            <img src="@/img/logo.png" alt="logo" class="header-logo">
            <span class="header-link">About</span>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderContent"
    }
</script>

<style lang="scss">
.header {
    /*position: fixed;*/
    top: 0;
    left: 0;
    right: 0;
    box-shadow: $bottomShadow;
    padding: 30px 20px;
}
.header-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
}
.header-logo {
    position: absolute;
    top: -15px;
    left: calc(50% - 64px);
}
.header-link {
    font-size: $middleSize;
    font-weight: $lightFontWeight;
    line-height: $middleLineHeight;
}

</style>