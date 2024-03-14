import {Component} from '@angular/core';
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
import {ITodoItemViewModel} from "../../../models/ItodoItemViewModel";

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
    description: ['', [Validators.required]],
    titleInput: ['', [Validators.required]],
    dateTodoList: [new Date(), [Validators.required]],
  });
  public TodoListArrayFromLocalStorage: ITodoItemViewModel[];

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ToDoDialogComponent>) {
    this.TodoListArrayFromLocalStorage =
      localStorage.getItem(TodoItem.ToDoList) ? JSON.parse(localStorage.getItem(TodoItem.ToDoList) as string) : [];
  }

  public addNewItemTodolist() {
    if (this.createDateEvent.valid) {
      //this.TodoListArrayFromLocalStorage.push(this.createDateEvent.value);
      // declare const modal: IModal;
      // const modal: IModal = {
      //   content: '',
      //   form: '',
      //   href: '',
      //   $form: null,
      //   $message: null,
      //   $modal: null,
      //   $submits: null
      // };
      var temp_modal :ITodoItemViewModel = <ITodoItemViewModel>{};
      temp_modal.description = '';
      temp_modal.titleInput = '';
      temp_modal.dateTodoList = new Date();


      var second_temp_modal: ITodoItemViewModel = <ITodoItemViewModel>{};
      second_temp_modal.dateTodoList = <Date>this.createDateEvent.value.dateTodoList;
      second_temp_modal.titleInput = <string>this.createDateEvent.value.titleInput;
      second_temp_modal.description = <string>this.createDateEvent.value.description;
      this.TodoListArrayFromLocalStorage.push(second_temp_modal);
      // const temp_modal: ITodoItemViewModel = {
      //   titleInput = '',
      //   dateTodoList = new Date(),
      //   description = ''
      // };


      localStorage.setItem(TodoItem.ToDoList, JSON.stringify(this.TodoListArrayFromLocalStorage));
    }
  }
}
