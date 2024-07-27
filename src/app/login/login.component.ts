import { Component } from '@angular/core';
import { FormBuilder, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router)
  {
    
  }

  loginForm  = this.formBuilder.group({
    userName: '',
    password: ''
  });

  onSubmit(){
    debugger;
    this.authService.login(this.loginForm.value).subscribe((response)=>{
      localStorage.setItem("accessToken", response.accessToken);
      console.log(response);
      this.router.navigateByUrl("/weather");
    }, (error) => {
      console.log(error);
    })
  }
}
