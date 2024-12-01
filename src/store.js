import Vue from 'vue';
import Vuex from 'vuex';
import Backend from './services/Backend';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        markers: [],
    },
    mutations: {
        setMarkers(state, markers) {
            state.markers = markers;
        },
        addMarker(state, marker) {
            if (!state.markers.find(item => item.address === marker.address)) {
                state.markers.push(marker);
            }
        },
        setSelectedMarkerId(state, id) {
            for (const marker of state.markers) {
                marker.isSelected = marker.id === id;
            }
        },
        deleteMarker(state, markerId) {
            state.markers = state.markers.filter((marker) => marker.id !== markerId);
        },
        deleteAllMarkers(state) {
            state.markers = [];
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
        async deleteMarker({ commit }, markerId) {
            await Backend.deleteMarker(markerId);
            commit('deleteMarker', markerId);
        },
        async deleteAllMarkers({ commit }) {
            await Backend.deleteAllMarkers();
            commit('deleteAllMarkers');
        },
    },
});
