import {ITodoItemViewModel} from "./ItodoItemViewModel";

class TodoItemViewModel implements ITodoItemViewModel {
  dateTodoList: Date;
  description: string;
  titleInput: string;

  constructor(titleInput: string, description: string, dateTodoList: Date) {
    this.dateTodoList = dateTodoList;
    this.description = description;
    this.titleInput = titleInput;
  }
}
