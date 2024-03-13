import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {TodoItem} from "../../../models/constants/ToDoList";
import {provideNativeDateAdapter} from "@angular/material/core";
import {ITodoItem} from "../../../models/TodoItem";

@Component({
  selector: 'app-to-do-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule,
    MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './to-do-dialog.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './to-do-dialog.component.css'
})
export class ToDoDialogComponent {
  public createDateEvent: FormGroup<ITodoItem> = this.formBuilder.group({
    titleInput: ['', [Validators.required]],
    description: ['', [Validators.required]],
    dateTodoList: [null, [Validators.required]],
  });
  public TodoListArrayFromLocalStorage: ITodoItem[];

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ToDoDialogComponent>) {
    this.TodoListArrayFromLocalStorage =
      localStorage.getItem(TodoItem.ToDoList) ? JSON.parse(localStorage.getItem(TodoItem.ToDoList) as string) : [];
  }

  public addNewItemTodolist() {
    if (this.createDateEvent.valid) {
      this.TodoListArrayFromLocalStorage.push(this.createDateEvent.value);
      localStorage.setItem(TodoItem.ToDoList, JSON.stringify(this.TodoListArrayFromLocalStorage));
    }
  }
}
