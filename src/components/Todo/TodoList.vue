<template>
  <div class="list-group">
    <TodoItem
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @toggle="onToggle({ id: item.id, completed: $event })"
      @edit="onEdit({ id: item.id, label: $event })"
      @remove="onRemove(item.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  ITodoItem,
  ChangeTodoItem,
  ToggleTodoItem
} from "../../types/TodoList";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    todoList: {
      type: Object as PropType<ITodoItem[]>,
      required: true
    }
  },

  emits: {
    toggleItem(payload: ToggleTodoItem) {
      return payload;
    },
    editItem(payload: ChangeTodoItem) {
      return payload;
    },
    removeItem(payload: ITodoItem["id"]) {
      return payload;
    }
  },

  methods: {
    onToggle(toggleObj: ToggleTodoItem) {
      this.$emit("toggleItem", toggleObj);
    },
    onEdit(changeObj: ChangeTodoItem) {
      this.$emit("editItem", changeObj);
    },
    onRemove(id: ITodoItem["id"]) {
      this.$emit("removeItem", id);
    }
  }
});
</script>
