import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string | undefined;
  message: string | undefined;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
    
    this.registerForm = this.fb.group({
      user: ['',[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]], 
      password: ['', [Validators.required]]
    });
        
  }

  get getControls(): any { return this.registerForm.controls; }

  onSubmit(): void {
    console.log(this.registerForm);
    if(this.getControls['user'].errors && this.getControls['user'].errors.required) this.errorMessage = 'El correo electrónico es obligatorio';
    if(this.getControls['password'].errors && this.getControls['password'].errors.required) this.errorMessage = 'La contraseña es obligatoria';
    if(this.getControls['user'].errors && this.getControls['password'].errors && this.getControls['user'].errors.required && this.getControls['password'].errors.required) this.errorMessage = 'El correo electrónico y la contraseña son obligatorias';
    
    if(this.registerForm.invalid) { 
      this.onReset();
      return;
    }

    this.signupService.signup(this.registerForm.value)
    .subscribe(
      (resp: string) => {
        this.message = resp;
        this.errorMessage = '';
      },
      (err: any) => {
        this.message = '';
        this.errorMessage = err.error.message;      
      }
    )
    this.registerForm.reset();
    
  }

  onReset(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      this.registerForm.get(key)?.setErrors(null) ;
    });
  }

}
