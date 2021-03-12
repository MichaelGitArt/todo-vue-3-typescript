/* eslint-disable @typescript-eslint/no-unused-vars */
<template>
  <template v-if="isEditing">
    <form class="todo-item" @submit.prevent="onEditSave">
      <input ref="textfield" v-model="text" type="text" class="form-control" />
      <div class="todo-item-btn-group">
        <button
          type="button"
          @click="onEditCancel"
          class="btn btn-secondary ms-2"
        >
          Cancel
        </button>
        <button type="submit" class="btn btn-success ms-2">Save</button>
      </div>
    </form>
  </template>

  <template v-else>
    <div class="todo-item">
      <div @click="onToggle" class="todo-item__label">
        <input
          class="form-check-input position-relative mt-0"
          type="checkbox"
          :checked="item.completed"
          readonly
        />
        <span
          class="ps-2"
          :class="{
            'text-decoration-line-through': item.completed
          }"
        >
          {{ item.label }}
        </span>
      </div>

      <div class="todo-item-btn-group">
        <button @click="onRemove" class="btn btn-danger">Remove</button>
        <button @click="onEdit" class="btn btn-primary ">Edit</button>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, nextTick } from "vue";
import { ITodoItem } from "../../types/TodoList";

export default defineComponent({
  name: "TodoItem",
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toggle(payload: boolean) {
      return true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    edit(payload: string) {
      return true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    remove(payload: null) {
      return true;
    }
  },
  props: {
    item: {
      type: Object as PropType<ITodoItem>,
      required: true
    }
  },
  setup(props, { emit }) {
    const isEditing = ref(false);
    const text = ref("");

    const textfield = ref<HTMLInputElement | null>(null);

    const onToggle = () => emit("toggle", !props.item.completed);
    const onRemove = () => emit("remove");
    const onEdit = () => {
      isEditing.value = true;
      text.value = props.item.label;

      nextTick(() => {
        if (textfield.value) {
          textfield.value.focus();
        }
      });
    };
    const onEditCancel = () => (isEditing.value = false);
    const onEditSave = () => {
      if (!text.value) return;

      emit("edit", text.value);
      isEditing.value = false;
    };

    return {
      isEditing,
      text,

      onToggle,
      onRemove,
      onEdit,
      onEditCancel,
      onEditSave,

      textfield
    };
  }
});
</script>

<style lang="scss">
.todo-item {
  display: flex;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 8px 10px;

  &__label {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    margin: -8px 0 -8px -10px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}

.todo-item-btn-group {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(70px, auto);
  grid-gap: 0.25rem;
}
</style>
