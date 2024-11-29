import Vue from 'vue';
import Vuex from 'vuex';
import Backend from './services/Backend';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        markers: [],
        selectedMarkerId: null,
    },
    mutations: {
        setMarkers(state, markers) {
            state.markers = markers;
        },
        addMarker(state, marker) {
            state.markers.push(marker);
        },
        setSelectedMarkerId(state, id) {
            state.selectedMarkerId = id;
        },
    },
    actions: {
        async loadMarkers({ commit }) {
            const markers = await Backend.getMarkers();
            commit('setMarkers', markers);
        },
        async addMarker({ commit }, marker) {
            const savedMarker = await Backend.addMarker(marker);
            commit('addMarker', savedMarker);
        },
    },
});
