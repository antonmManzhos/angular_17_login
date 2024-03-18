import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {Router, RouterModule} from "@angular/router";
import {
  MatDialog,
  MatDialogModule,
} from "@angular/material/dialog";

import {ToDoDialogComponent} from "../to-do-dialog/to-do-dialog.component";
import {ToDoDeriveTableComponent} from "../to-do-derive-table/to-do-derive-table.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    ToDoDeriveTableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, public dialog: MatDialog) {
  }

  public logout() {
    if (confirm("Are you sure?")) {
      this.router.navigateByUrl('login');
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ToDoDialogComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
