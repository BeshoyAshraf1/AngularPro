import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string| undefined;
  message: string | undefined;

  constructor(private http: HttpClient) {}

  login(): void {
    if (!this.username || !this.password) {
      this.message = 'Please enter both username and password.';
      return;
    }

    const loginRequest = { username: this.username, password: this.password };
    this.http.post<any>('https://localhost:7021/api/login', loginRequest)
      .subscribe(
        response => this.message = response.message,
        error => this.message = 'An error occurred.'
      );
  }
}