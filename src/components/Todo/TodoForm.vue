<template>
  <form @submit.prevent="onSubmit">
    <input v-model="textfield" type="text" class="form-control" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TodoForm",
  emits: {
    onCreate(str: string) {
      return str;
    }
  },

  setup(_, { emit }) {
    const textfield = ref("");

    const onSubmit = () => {
      if (!textfield.value) return;

      emit("onCreate", textfield.value);
      textfield.value = "";
    };

    return {
      textfield,
      onSubmit
    };
  }
});
</script>
