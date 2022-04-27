import { useStore } from "vuex";
import { computed } from "vue";

const useUI = () => {
  const store = useStore();
  return {
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/isSideMenuOpen"];
      },
      set(val) {
        store.commit("ui/toogleSideMenu");
      }
    }),
    toogleAsideMenu() {
      store.commit("ui/toogleSideMenu");
    },
  }
}

export default useUI;
