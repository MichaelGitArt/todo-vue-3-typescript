<template>
  <div class="container">
    <Todo class="mt-3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./components/Todo/Todo.vue";

export default defineComponent({
  name: "App",
  components: {
    Todo
  }
});
</script>

<style lang="scss"></style>
