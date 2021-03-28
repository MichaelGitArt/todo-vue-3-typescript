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
import { ChangeTodoItem } from "@/types/TodoList";
import useTodo from "@/components/composables/useTodo";
import useSortTodo from "@/components/composables/useSortTodo";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";

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
    addItem("Third");

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

    const { sortedTodoList } = useSortTodo(todoList);
    return {
      todoList: sortedTodoList,

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
  border: 1px solid #ced4da;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}
</style>
