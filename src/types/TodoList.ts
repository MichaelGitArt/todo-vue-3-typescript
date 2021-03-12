export interface ITodoItem {
  label: string;
  id: number;
  completed: boolean;
}

export type ChangeTodoItem = Pick<ITodoItem, "id" | "label">;
