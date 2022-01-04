<template>
    <footer class="footer">
        <div class="footer-container">
        <span class="footer-text">
            &copy; 2022 MARVEL
        </span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
.footer {
    display: flex;
    flex-grow: 0;
    padding: 30px 20px;
    /*margin: 100px 0 0 0;*/
    box-shadow: $topShadow;
}
.footer-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-text {
    font-size: $middleSize;
    font-weight: $lightFontWeight;
    line-height: $middleLineHeight;
}
</style>