<template>
    <header class="header">
        <div class="header-container">
            <router-link to="/">
                <img src="@/img/logo.png" alt="logo" class="header-logo">
            </router-link>
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
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: $bottomShadow;
    background: $white;
    z-index: 10;
}
.header-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding: 38px 20px;
}
.header-logo {
    position: absolute;
    top: 15px;
    left: calc(50% - 64px);
}
.header-link {
    font-size: $middleSize;
    font-weight: $lightFontWeight;
    line-height: $middleLineHeight;
}
@media (max-width: 767px) {
    .header-link {
        font-size: $buttonSize;
    }
}
</style>