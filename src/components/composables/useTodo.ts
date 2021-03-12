import { ChangeTodoItem, ITodoItem } from "@/types/TodoList";
import { reactive } from "vue";

export default function useTodo() {
  const todoList = reactive<ITodoItem[]>([]);

  const getItem = (id: ITodoItem["id"]) => {
    return todoList.find(item => item.id === id);
  };
  const getItemIndex = (id: ITodoItem["id"]) => {
    return todoList.findIndex(item => item.id === id);
  };

  const removeItem = (id: ITodoItem["id"]) => {
    const index = getItemIndex(id);
    if (index === -1) return;

    todoList.splice(index, 1);
  };

  const editItem = ({ id, label }: ChangeTodoItem) => {
    const item = getItem(id);
    if (!item) return;

    item.label = label;
  };

  const toggleItem = (id: ITodoItem["id"]) => {
    const item = getItem(id);
    if (!item) return;

    item.completed = !item.completed;
  };

  const addItem = (label: ITodoItem["label"]) => {
    todoList.push({
      id: Date.now() + Math.random(),
      label,
      completed: false
    });
  };

  return {
    todoList,

    getItem,
    getItemIndex,

    removeItem,
    editItem,
    toggleItem,
    addItem
  };
}
