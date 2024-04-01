import { Component } from '@angular/core';
import {ITodoItemViewModel} from "../../../models/ItodoItemViewModel";
import {ToDoService} from "../../../services/to-do.service";
import {CdkTableModule} from "@angular/cdk/table";
import {AsyncPipe, CommonModule, DatePipe} from "@angular/common";
import {ToDoDialogComponent} from "../to-do-dialog/to-do-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-to-do-derive-table',
  standalone: true,
  imports: [CdkTableModule, DatePipe, AsyncPipe, CommonModule],
  templateUrl: './to-do-derive-table.component.html',
  styleUrl: './to-do-derive-table.component.css'
})
export class ToDoDeriveTableComponent {
  displayedColumns: string[] = ['dateTodoList','titleInput', 'description', 'delete'];
  public toDoArray: BehaviorSubject<ITodoItemViewModel[]>|undefined;

    constructor(private toDoService: ToDoService, public dialog: MatDialog) {
      this.toDoArray = toDoService.todoList;
    }

    public editRow(element: ITodoItemViewModel) {
      if(!element) {
        return;
      }
      this.dialog.open(ToDoDialogComponent, {
        width: '750px',
        enterAnimationDuration: '3000ms',
        exitAnimationDuration: '1500ms',
        data: {
          description: element.description,
          titleInput: element.titleInput,
          dateTodoList: element.dateTodoList
        }
      });
    }
}
