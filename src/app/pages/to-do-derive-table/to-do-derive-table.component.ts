import { Component } from '@angular/core';
import {ITodoItemViewModel} from "../../../models/ItodoItemViewModel";
import {ToDoService} from "../../../services/to-do.service";
import {CdkTableModule} from "@angular/cdk/table";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-to-do-derive-table',
  standalone: true,
  imports: [CdkTableModule, DatePipe],
  templateUrl: './to-do-derive-table.component.html',
  styleUrl: './to-do-derive-table.component.css'
})
export class ToDoDeriveTableComponent {
  displayedColumns: string[] = ['dateTodoList','titleInput', 'description', 'delete'];
  public toDoArray: ITodoItemViewModel[] = [];

    constructor(private toDoService: ToDoService) {
     toDoService.getToDoList().subscribe(param => this.toDoArray = param);
    }
}
