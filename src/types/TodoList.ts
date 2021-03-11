export interface ITodoItem {
  label: string;
  id: number;
  completed: boolean;
}

export type ToggleTodoItem = Pick<ITodoItem, "id" | "completed">;
export type ChangeTodoItem = Pick<ITodoItem, "id" | "label">;
