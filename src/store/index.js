import { createStore } from 'vuex';

export default createStore({
    state: {
        characters: [],
        charactersFilters: []
    },

    getters: {},
    
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload
        },
        setCharactersFilter(state, payload) {
            state.charactersFilters = payload
        }
    },

    actions: {
        async getCharacters({ commit }) {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const data = await response.json();
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error);
                console.log(error)
            }
        }
    },

    modules: {}
})
