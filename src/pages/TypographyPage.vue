<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">HeadLine 1</span>
    <span class="text-h2">HeadLine 2</span>
    <span class="text-h3">HeadLine 3</span>
    <span class="text-h4">HeadLine 4</span>
    <span class="text-h5">HeadLine 5</span>
    <span class="text-h6">HeadLine 5</span>
    <q-separator></q-separator>
    <span class="text-subtitle">Subtitle 1</span>
    <span class="text-subtitle">Subtitle 2</span>
    <q-separator> </q-separator>
    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum placeat
      tenetur nobis omnis recusandae, eos reprehenderit! Minus error tenetur,
      quidem accusamus consequatur fugit, aliquam culpa facere magnam
      dignissimos sint id.
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum placeat
      tenetur nobis omnis recusandae, eos reprehenderit! Minus error tenetur,
      quidem accusamus consequatur fugit, aliquam culpa facere magnam
      dignissimos sint id.
    </p>
    <q-separator></q-separator>
    <span class="text-weight-thin"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      accusantium, nesciunt doloribus temporibus porro nobis illum
      exercitationem quae sit deserunt deleniti dicta cupiditate quaerat nisi
      doloremque ducimus, ab recusandae culpa?</span
    >
    <span class="text-weight-light"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      accusantium, nesciunt doloribus temporibus porro nobis illum
      exercitationem quae sit deserunt deleniti dicta cupiditate quaerat nisi
      doloremque ducimus, ab recusandae culpa?</span
    >
    <span class="text-weight-regular"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      accusantium, nesciunt doloribus temporibus porro nobis illum
      exercitationem quae sit deserunt deleniti dicta cupiditate quaerat nisi
      doloremque ducimus, ab recusandae culpa?</span
    >
    <span class="text-weight-medium"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      accusantium, nesciunt doloribus temporibus porro nobis illum
      exercitationem quae sit deserunt deleniti dicta cupiditate quaerat nisi
      doloremque ducimus, ab recusandae culpa?</span
    >
    <span class="text-weight-bold"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      accusantium, nesciunt doloribus temporibus porro nobis illum
      exercitationem quae sit deserunt deleniti dicta cupiditate quaerat nisi
      doloremque ducimus, ab recusandae culpa?</span
    >
    <span class="text-weight-bolder"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      accusantium, nesciunt doloribus temporibus porro nobis illum
      exercitationem quae sit deserunt deleniti dicta cupiditate quaerat nisi
      doloremque ducimus, ab recusandae culpa?</span
    >
    <q-btn @click="toogleAsideMenu" color="primary" :label="sideMenuOpen?'Cerrar menu lateral':'Abrir menu lateral'" class="q-mt-md"/>
  </q-page>

</template>

<script>
import { defineComponent} from "vue";
import useUI from "../composables/useUI.js";

export default defineComponent({
  name: "TypographyPage",
  setup(){
    const { toogleAsideMenu,sideMenuOpen }= useUI();
    return {
      toogleAsideMenu,
      sideMenuOpen

    }
  }
});
</script>

