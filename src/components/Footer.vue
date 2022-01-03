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
.footer-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    box-shadow: $topShadow;
}
.footer-text {
    font-size: $middleSize;
    font-weight: $lightFontWeight;
    line-height: $middleLineHeight;
}
</style>