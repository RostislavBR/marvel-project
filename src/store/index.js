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
        characterInfo: {
            items: [],
            status: null,
            code: null,
            isLoading: true,
        },
        comicsInfo: {
            items: [],
            status: null,
            code: null,
            isLoading: true,
        }
    },
    mutations: {
      setCharacters(state, payload) {
          state.characters.items = payload.data.results;
      },
      setCharacterInfo(state, payload) {
          state.characterInfo.items = payload.data.results;
      },
        setComicsInfo(state, {data}) {
            state.comicsInfo.items = data.results;
        },
    },
    getters: {
      getCharacters(state) {
          return state.characters.items
      },
      getCharacterInfo(state) {
          return state.characterInfo.items
      },
      getComicsInfo(state) {
          return state.comicsInfo.items
      }
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
        getCharacterInfo(context, payload) {
            fetch(`${ API_URL.characters }/${ payload }?apikey=${ process.env.VUE_APP_PUBLIC_API_KEY }`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit("setCharacterInfo", response)
                });
        },
        getCharacterComics(context, payload) {
            fetch(`${ API_URL.characters }/${ payload }/comics?apikey=${ process.env.VUE_APP_PUBLIC_API_KEY }`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit("setComicsInfo", response)
                });
        },
    },
});
