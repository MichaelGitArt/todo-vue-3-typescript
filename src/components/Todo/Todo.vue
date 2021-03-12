<template>
  <div class="todo p-3">
    <h1>Todo</h1>
    <TodoList
      class="mb-3"
      :todo-list="todoList"
      @toggle-item="onToggle"
      @edit-item="onEdit"
      @remove-item="onRemove"
    />
    <TodoForm @on-create="onCreate" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";
import { ChangeTodoItem } from "@/types/TodoList";
import useTodo from "../composables/useTodo";

export default defineComponent({
  name: "Todo",
  components: {
    TodoList,
    TodoForm
  },

  setup() {
    const { todoList, removeItem, editItem, toggleItem, addItem } = useTodo();
    addItem("First");
    addItem("Second");

    const onToggle = (id: number) => {
      toggleItem(id);
    };

    const onEdit = (changeObj: ChangeTodoItem) => {
      editItem(changeObj);
    };

    const onRemove = (id: number) => {
      removeItem(id);
    };

    const onCreate = (label: string) => {
      addItem(label);
    };

    return {
      todoList,

      onToggle,
      onEdit,
      onRemove,
      onCreate
    };
  }
});
</script>

<style lang="scss">
.todo {
  border: 1px solid #000;
  border-radius: 6px;
}
</style>
