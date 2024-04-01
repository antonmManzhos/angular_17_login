import {Component, Inject} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
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
import {ToDoService} from "../../../services/to-do.service";

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
    description: [this.dataForEdit ? (this.dataForEdit.description ? this.dataForEdit.description : '') : '', [Validators.required]],
    titleInput: [this.dataForEdit ? (this.dataForEdit.titleInput ? this.dataForEdit.titleInput : '') : '', [Validators.required]],
    dateTodoList: [ this.dataForEdit ? (this.dataForEdit.dateTodoList ? this.dataForEdit.dateTodoList : new Date()): new Date(), [Validators.required]],
  });
  public TodoListArrayFromLocalStorage: ITodoItemViewModel[];

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<ToDoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dataForEdit: ITodoItemViewModel,
              private toDoService: ToDoService) {
    this.TodoListArrayFromLocalStorage =
      localStorage.getItem(TodoItem.ToDoList) ? JSON.parse(localStorage.getItem(TodoItem.ToDoList) as string) : [];
  }

  public addNewItemTodolist() {
    if (this.createDateEvent.valid) {
      let newTodoItem: ITodoItemViewModel =
        {
          dateTodoList : this.createDateEvent.value.dateTodoList,
          titleInput : this.createDateEvent.value.titleInput,
          description : this.createDateEvent.value.description
        };
      this.toDoService.addItem(newTodoItem);
    }
  }
  public updateTodoItem() {
    if (this.createDateEvent.valid) {
      this.toDoService.findAndUpdateItem(
        this.createDateEvent.value.dateTodoList,
        <ITodoItemViewModel> this.createDateEvent.value);
    }
  }
}
