import { Injectable } from '@angular/core';
import {ITodoItemViewModel} from "../models/ItodoItemViewModel";
import {Observable, of} from "rxjs";
import {TodoItem} from "../models/constants/ToDoList";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor() {
  }

  getToDoList(): Observable<ITodoItemViewModel[]> {
    return this.createDb();
  }

  private createDb(): Observable<ITodoItemViewModel[]> {
    return of(<ITodoItemViewModel[]>JSON.parse(localStorage.getItem(TodoItem.ToDoList) || '[]'));
  }
}
