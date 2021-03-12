<template>
  <div class="list-group">
    <TodoItem
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @toggle="onToggle(item.id)"
      @edit="onEdit({ id: item.id, label: $event })"
      @remove="onRemove(item.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodoItem, ChangeTodoItem } from "../../types/TodoList";
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
    toggleItem(payload: ITodoItem["id"]) {
      return payload;
    },
    editItem(payload: ChangeTodoItem) {
      return payload;
    },
    removeItem(payload: ITodoItem["id"]) {
      return payload;
    }
  },

  setup(_, { emit }) {
    const onToggle = (id: number) => emit("toggleItem", id);
    const onEdit = (changeObj: ChangeTodoItem) => emit("editItem", changeObj);
    const onRemove = (id: ITodoItem["id"]) => emit("removeItem", id);

    return {
      onToggle,
      onEdit,
      onRemove
    };
  }
});
</script>
