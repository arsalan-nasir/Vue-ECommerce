const state = {
  title: "Title From Store",
  categories: [
    { value: "Shirts", color: "#90090" },
    { value: "Bottom", color: "#12312" },
    { value: "Foot Wear", color: "#272727" },
    { value: "Watches", color: "#42321" },
    { value: "UnStitched Clothes", color: "#64122" },
    { value: "Accesories", color: "#90242" },
  ],
  selectedTab: "Shirts",
};

const mutations = {
  TAB_CHANGE: (state, selectedTab) => {
    state.selectedTab = selectedTab;
  },
};

const actions = {
  handleTabChange({ commit }, selectedTab) {
    commit("TAB_CHANGE", selectedTab);
  },
};

export default { namespaced: true, state, mutations, actions };
