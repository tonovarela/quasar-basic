<template>
  <q-page>
    <div class="row q-mb-xs">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <div class="row">
      <div class="col bg-primary">1</div>
      <div class="col-6 bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <div class="row q-mb-xs justify-center">
      <div class="col-4 bg-primary">1</div>
      <div class="col-4 bg-secondary">2</div>
    </div>
    <div class="row q-mb-xs justify-end">
      <div class="col-4 bg-primary">1</div>
      <div class="col-4 bg-secondary">2</div>
    </div>
    <div class="row q-mb-xs justify-between">
      <div class="col-4 bg-primary">1</div>
      <div class="col-4 bg-secondary">2</div>
    </div>
    <q-separator spaced></q-separator>
    <div class="row q-mb-md justify-between">
      <div class="col-12 col-sm-5 col-md-4 bg-primary">1</div>
      <div class="col-12 col-sm-5 col-md-4 bg-secondary">2</div>
    </div>
    <q-separator spaced></q-separator>
    <div class="row">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row justify-between">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row justify-end">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="row justify-around">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column q-mb-md items-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column q-mb-md items-end bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>
    <div class="column custom q-mb-md items-center justify-center bg-dark">
      <div class="square-box bg-primary">1</div>
      <div class="square-box bg-secondary">2</div>
      <div class="square-box bg-accent">4</div>
    </div>
    <div class="column custom q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary">1</div>
      <div class="square-box bg-secondary">2</div>
      <div class="square-box bg-accent">4</div>
    </div>
    <div class="column custom q-mb-md items-center justify-between bg-dark">
      <div class="square-box bg-primary self-end">1</div>
      <div class="square-box self-start bg-secondary">2</div>
      <div class="square-box bg-accent">4</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlexPage",
});
</script>
<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 50px;
}
.square-box {
  width: 50px;
  height: 50px;
}
.custom {
  height: 300px;
}
</style>
