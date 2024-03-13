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
    MatDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, public dialog: MatDialog) {
  }

  public logout() {
    if (confirm("lox pidor")) {
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

// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
//   standalone: true,
//   imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
//   providers: [provideNativeDateAdapter()],
// })
//
//
// export class DialogCreatingTodoItem {
//
// }
