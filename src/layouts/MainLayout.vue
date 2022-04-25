<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="la la-bars"
          aria-label="Menu"
          @click="toogleAsideMenu"
        />

        <q-toolbar-title> App </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="sideMenuOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "../router/link-list.js";
import useUI from  "../composables/useUI";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },

  setup() {
    const {sideMenuOpen,toogleAsideMenu }= useUI();
    return {
      sideMenuOpen,
      linksList,
      toogleAsideMenu,
    };
  },
});
</script>
