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
import { ChangeTodoItem, ITodoItem, ToggleTodoItem } from "@/types/TodoList";

export default defineComponent({
  name: "Todo",
  data: () => ({
    todoList: [
      {
        id: 1,
        label: "Hello",
        completed: false
      }
    ] as ITodoItem[]
  }),

  components: {
    TodoList,
    TodoForm
  },
  methods: {
    onToggle({ id, completed }: ToggleTodoItem) {
      const item = this.todoList.find(item => item.id === id);
      if (!item) return;

      item.completed = completed;
    },

    onEdit({ id, label }: ChangeTodoItem) {
      const item = this.todoList.find(item => item.id === id);
      if (!item) return;

      item.label = label;
    },

    onRemove(id: ITodoItem["id"]) {
      console.log(`🚀 ~ file: Todo.vue ~ line 57 ~ onRemove ~ id`, id);
      const index = this.todoList.findIndex(item => item.id === id);
      if (index === -1) return;

      this.todoList.splice(index, 1);
    },

    onCreate(label: string) {
      this.todoList.push({
        id: Date.now(),
        label,
        completed: false
      });
    }
  }
});
</script>

<style lang="scss">
.todo {
  border: 1px solid #000;
  border-radius: 6px;
}
</style>
