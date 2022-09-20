import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string | undefined;
 
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

 onSubmit(): any {
 
  if(this.userForm.invalid) {return;}
    
  return this.loginService.login(this.userForm.value)
    .subscribe(() => {
      if(this.errorMessage && this.errorMessage !== '') this.errorMessage = '';
      this.router.navigate(['/home']);
    },
    (error: string) => {
       this.errorMessage = error;
    }
    )
 }

}
