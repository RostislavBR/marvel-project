<template>
    <div>
        <div class="search-box">
            <input type="text" class="search-string" placeholder="Captain America, Hulk, Thor..." v-model="message" v-on:keyup="onChangeHandler">
        </div>
        <div class="search-results" v-if="heroName.length > 0 && message.length > 0">
            <div class="results-item" v-for="{id, name} in heroName" :key="id">
                <router-link :to="{ path: `/character/${id}` }" :style="{ textDecoration: 'none', color: '#000000'}">{{ name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "SearchString",
        data() {
          return {
              message: ''
          }
        },
        methods: {
            onChangeHandler() {
                if(this.message.length > 0) {
                    this.getCharactersByName(this.message);
                }
            },
            ...mapActions(['getCharactersByName']),
        },
        computed: {
            ...mapGetters({ heroName :'getHeroByName' })
        },
    }
</script>

<style lang="scss">
    .search-box {
        padding: 20px;
        background-color: $white;
        border-radius: $searchBorderRadius;
        box-shadow: $boxInputShadow;
    }

    .search-string {
        width: 740px;
        padding: 17px 0 17px 16px;
        background-color: $grey;
        border-radius: $searchBorderRadius;
        border: $inputBorder;
        color: $red;
        outline: none;
    }
    .search-string:focus {
        outline: 2px solid $grey;
    }
    .search-results {
        position: absolute;
        top: 460px;
        width: 798px;
        max-height: 320px;
        background: $white;
        border-radius: $searchBorderRadius;
        z-index: 10;
        overflow-y: scroll;
    }
    .results-item {
        padding: 10px 0 10px 0;
        margin: 0 20px 0 20px;
        border-bottom: 1px solid $grey;
    }
    @media (max-width: 1024px) {
        .search-string {
            width: 550px;
        }
        .search-results {
            top: 330px;
            width: 608px;
        }
    }
    @media (max-width: 767px) {
        .search-box {
            padding: 10px;
        }
        .search-string {
            width: 280px;
            padding: 10px 0 10px 10px;
        }
        .search-results {
            top: 250px;
            width: 312px;
        }
    }
</style>