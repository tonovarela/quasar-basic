<template>
  <q-page class="q-ma-md">
    <div class="text-h3">Forms</div>
    <q-separator spaced></q-separator>
    <div class="row justify-center">
      <q-form
        @submit.prevent="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          type="email"
          v-model="userForm.email"
          label="Capture su email "
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'Este campo es obligatorio',
            (val) => {
              const emailPattern =
                /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
              return emailPattern.test(val) || 'El correo no parece ser válido';
            },
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password1"
          label="Capture su password "
          lazy-rules
          no-error-icon
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Este campo es obligatorio',
          ]"
        />
        <q-input
          filled
          type="password2"
          v-model="userForm.password2"
          no-error-icon
          label="Repetir su password"
          lazy-rules
          :rules="[isSamePassword]"
        />

        <q-toggle
          :style="
            userForm.errorInConditions && !userForm.conditions && 'color:red'
          "
          v-model="userForm.conditions"
          label="Acepto los terminos y condiciones"
        />
        <div class="row justify-end">
          <q-btn unelevated label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            unelevated
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

import { useQuasar } from "quasar";
export default defineComponent({
  name: "FormsPage",
  setup() {
    const $q = useQuasar();
    const userForm = ref({
      email: "tonovarela@live.com",
      password1: "123",
      password2: "123",
      conditions: true,
      errorInConditions: false,
    });
    return {
      userForm,
      onSubmit() {
        userForm.value.errorInConditions = false;
        if (!userForm.value.conditions) {
          //
          $q.notify({
            type: "negative",
            icon: "las la-exclamation-circle",
            message: "Debe de aceptar las condiciones de uso",
          });
          userForm.value.errorInConditions = true;
          return;
        }
        console.log(userForm.value);
      },
      onReset() {
        userForm.value = {
          email: "",
          password1: "",
          password2: "",
          conditions: false,
          errorInConditions: false,
        };
      },
      isSamePassword(val) {
        return (
          val === userForm.value.password1 || "Las contraseñas no son iguales"
        );
      },
    };
  },
});
</script>

<style>
</style>
