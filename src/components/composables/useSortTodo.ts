import { computed } from "vue";
import { ITodoItem } from "@/types/TodoList";

export default function useSortTodo(todoList: ITodoItem[]) {
  const sortedTodoList = computed(() => {
    return todoList.sort((a, b) => {
      return !a.completed && !b.completed ? 0 : a.completed ? 1 : -1;
    });
  });

  return {
    sortedTodoList
  };
}
