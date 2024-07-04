import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  loading = false;

  constructor(private router: Router, private appService: AppService) {
    const username = localStorage.getItem('username')
    if (username) {
      this.username = username;
    }
  }

  signIn() {
    this.loading = true;
    this.appService
      .getUserByUsername(this.username)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.loading = true
          localStorage.setItem('username', this.username)
          localStorage.setItem('firstName', response?.firstName)
          localStorage.setItem('lastName', response?.lastName)
          this.router.navigate(['homepage'])
        },
        // this.appService.getUserByUsername(this.username).subscribe({
        //   next: (response) => {
        //     localStorage.setItem('username', this.username)
        //     localStorage.setItem('firstName', response?.firstName)
        //     localStorage.setItem('lastName', response?.lastName)
        //     this.router.navigate(['homepage'])
        //   },
        error: (error) => {
          this.loading = false;
          alert("User not found!")
        }
      })
    // subscription.unsubscribe();
    console.log(this.username)
  }
}
