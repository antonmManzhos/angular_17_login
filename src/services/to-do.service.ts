import {Injectable} from '@angular/core';
import {ITodoItemViewModel} from "../models/ItodoItemViewModel";
import {BehaviorSubject} from "rxjs";
import {TodoItem} from "../models/constants/ToDoList";
import {ɵValue} from "@angular/forms";
import {ITodoItem} from "../models/TodoItem";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public todoList: BehaviorSubject<ITodoItemViewModel[]> =
    new BehaviorSubject(<ITodoItemViewModel[]>JSON.parse(localStorage.getItem(TodoItem.ToDoList) || '[]'));
  constructor() {
  }
  public findAndUpdateItem(valueSearch: ɵValue<ITodoItem["dateTodoList"]> | undefined, newItem: ITodoItemViewModel) {
    let arrayItems = this.getToDoList();
    let index: number = arrayItems.findIndex(x => x.dateTodoList === valueSearch);
      if (index > -1) {
        this.removeItem(index, newItem);
      }
    this.todoList.next(this.getToDoList());
  }

  public removeItem(index: number, newItem?: ITodoItemViewModel) {
    let arrayItems = this.getToDoList();
      if (newItem === undefined) {
        arrayItems.splice(index, 1);
      } else {
        arrayItems.splice(index, 1, newItem);
      }

      localStorage.removeItem(TodoItem.ToDoList);
      localStorage.setItem(TodoItem.ToDoList, JSON.stringify(arrayItems));

      this.todoList.next(this.getToDoList());
  }

  public addItem(newItem: ITodoItemViewModel) {
    let arrayItems = this.getToDoList();
    arrayItems.push(newItem);
    localStorage.setItem(TodoItem.ToDoList, JSON.stringify(arrayItems));
    this.todoList.next(this.getToDoList());
  }
  private getToDoList(): ITodoItemViewModel[] {
    return JSON.parse(localStorage.getItem(TodoItem.ToDoList) || '[]');
  }
}
