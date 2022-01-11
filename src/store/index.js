import Vue from "vue";
import Vuex from "vuex";
import { API_URL } from '@/constants/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characters: {
            items: [],
            status: null,
            code: null,
            isLoading: true,
        },
    },
    mutations: {
      setCharacters(state, payload) {
          state.characters.items = payload;
      },
    },
    actions: {
        getCharacters(context) {
            fetch(`${ API_URL.characters }?apikey=${ process.env.VUE_APP_PUBLIC_API_KEY }`)
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    context.commit("setCharacters", response);
                });
        },
    },
});
