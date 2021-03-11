<template>
  <div class="">
    <form @submit.prevent="onSubmit">
      <input v-model="textfield" type="text" class="form-control" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Todo",
  data: () => ({
    textfield: ""
  }),
  emits: {
    onCreate(str: string) {
      return str;
    }
  },

  methods: {
    onSubmit() {
      if (!this.textfield) return;

      this.$emit("onCreate", this.textfield);
      this.textfield = "";
    }
  }
});
</script>
