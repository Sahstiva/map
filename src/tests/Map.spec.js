import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import Map from '@/components/Map.vue';
import i18nMock from '@/tests/mocks/i18nMock';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe('Map.vue', () => {
  let wrapper;
  let store;
  let state;
  let actions;
  let mutations;
  let vuetify = new Vuetify({});

  beforeEach(() => {
    // Mock state
    state = {
      markers: [
        { id: 1, name: 'Marker 1', latlng: { lat: 40.7128, lng: -74.0060 } },
        { id: 2, name: 'Marker 2', latlng: { lat: 34.0522, lng: -118.2437 } },
      ],
    };

    // Mock actions
    actions = {
      deleteMarker: jest.fn(),
      addMarker: jest.fn(),
    };

    // Mock mutations
    mutations = {
      setHoveredMarker: jest.fn(),
      setSelectedMarkerId: jest.fn(),
    };

    // Create the mock store
    store = new Vuex.Store({
      state,
      actions,
      mutations,
    });

    // Mount the component with the mock store
    wrapper = mount(Map, {
      localVue,
      vuetify,
      store,
      mocks: {
        $t: i18nMock.t,
      },
    });
  });

  it('renders markers correctly', () => {
    const listItems = wrapper.findAll('v-list-item');
    expect(listItems.length).toBe(state.markers.length);
  });

  it('updates hoveredMarker on mouseenter and mouseleave', async () => {
    const listItem = wrapper.find('v-list-item');
    await listItem.trigger('mouseenter');
    expect(mutations.setHoveredMarker).toHaveBeenCalledWith(expect.any(Object), state.markers[0].id);

    await listItem.trigger('mouseleave');
    expect(mutations.setHoveredMarker).toHaveBeenCalledWith(expect.any(Object), null);
  });

  it('selects marker on click', async () => {
    const listItem = wrapper.find('v-list-item');
    await listItem.trigger('click');
    expect(mutations.setSelectedMarkerId).toHaveBeenCalledWith(expect.any(Object), state.markers[0].id);
  });

  it('calls onListItemClick when list item is clicked', async () => {
    const onListItemClick = jest.spyOn(wrapper.vm, 'onListItemClick');
    const listItem = wrapper.find('v-list-item');
    await listItem.trigger('click');
    expect(onListItemClick).toHaveBeenCalledWith(state.markers[0]);
  });

  it('shows delete icon only on hover', async () => {
    const listItem = wrapper.find('v-list-item');
    const deleteIcon = () => wrapper.find('v-icon[icon="mdi-delete"]');

    expect(deleteIcon().exists()).toBe(false);

    await listItem.trigger('mouseenter');
    expect(deleteIcon().exists()).toBe(true);

    await listItem.trigger('mouseleave');
    expect(deleteIcon().exists()).toBe(false);
  });

  it('dispatches deleteMarker action when delete button is clicked', async () => {
    const deleteButton = wrapper.find('v-btn[icon="mdi-delete"]');
    await deleteButton.trigger('click');
    expect(actions.deleteMarker).toHaveBeenCalledWith(expect.any(Object), state.markers[0].id);
  });

  it('reacts to state changes', async () => {
    const newMarkers = [
      { id: 3, name: 'Marker 3', latlng: { lat: 51.5074, lng: -0.1278 } },
    ];
    store.state.markers = newMarkers;
    await wrapper.vm.$nextTick();

    const listItems = wrapper.findAll('v-list-item');
    expect(listItems.length).toBe(newMarkers.length);
  });
});
