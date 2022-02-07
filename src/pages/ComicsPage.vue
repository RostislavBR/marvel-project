<template>
    <div class="comics-container">
        <ComicsHeader :comicsImage="comics[0].images[0]" :comicsTitle="comics[0].title"/>
        <div class="comics-main">
            <ComicsMainTitle/>
            <ComicsMainText :comicsText="comics[0].description"/>
        </div>
    </div>
</template>

<script>
    import ComicsHeader from "@/components/ComicsHeader";
    import ComicsMainTitle from "@/components/ComicsMainTitle";
    import ComicsMainText from "@/components/ComicsMainText";
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "ComicsPage",
        components: { ComicsHeader, ComicsMainTitle, ComicsMainText },
        methods: {
            ...mapActions(['getComics']),
        },
        computed: {
            getComicsId() {
                return this.$route.params.id;
            },
            ...mapGetters({ comics: 'getComicsId'}),
        },
        created() {
            this.getComics(this.getComicsId);
        },
    }
</script>

<style lang="scss">
    .comics-container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        width: 1238px;
        /*max-height: 832px;*/
        margin: 120px auto 0 auto;
        background: $white;
    }
    .comics-main {
        padding: 20px;
    }
    @media (max-width: 1024px) {
        .comics-container {
            width: 768px;
        }
    }
    @media (max-width: 767px) {
        .comics-container {
            width: 320px;
        }
    }
</style>