import Vue from "vue";
import Vuex from "vuex";
import { API_URL } from '@/constants/api'
import { renderRandomOffset } from "@/utility/randomRender";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characters: {
            items: [],
            status: null,
            code: null,
            isLoading: true,
        },
        charactersByName: {
            items: [],
        }
    },
    mutations: {
      setCharacters(state, payload) {
          state.characters.items = payload.data.results;
      },
      setCharactersByName(state, {data}) {
        state.charactersByName.items = data.results;
      },
    },
    getters: {
      getCharacters(state) {
          return state.characters.items
      },
      getHeroByName(state) {
          return state.charactersByName.items;
      },
    },
    actions: {
        getCharacters(context) {
            fetch(`${ API_URL.characters }?limit=14&offset=${renderRandomOffset(100)}&apikey=${ process.env.VUE_APP_PUBLIC_API_KEY }`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit("setCharacters", response);
                });
        },
        getCharactersByName(context, payload) {
          fetch(`${ API_URL.characters }?nameStartsWith=${payload}&apikey=${ process.env.VUE_APP_PUBLIC_API_KEY }`)
              .then(response => {
                 return response.json()
              })
              .then(response => {
                  context.commit("setCharactersByName", response);
              });
        },
    },
});
