import {Component} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterModule,} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public form = this.fb.group({
    login: ["", Validators.required],
    pass: ["", Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router) {
  }

  public submitForm() {
    if (this.form.valid) {
      if (this.form.value.login === 'qwerty' && this.form.value.pass == '123456') {
        this.router.navigateByUrl('dashboard');
      }
    }
  }
}
