import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;


  configs = {
    isSignIn: true,
    action: 'Login',
    actionChange: 'Create account'
  };
  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  changeAuthMethod(): void {
    console.log('ddd');
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Sign Up';
    this.configs.actionChange = isSignIn ? 'Create Account' : 'Already have an account';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      // a linha acima adiona dimaicamente mais um campo (name) no nosso formControl
      : this.authForm.removeControl('name');
      // a linha acima retira dimaicamente um campo (name) do nosso formControl
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // args-> email: ['valor inicial', [validadores síncronos], [validadores assíncronos]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get name(): FormControl{
    return <FormControl> this.authForm.get('name');
  }

  get email(): FormControl{
    return <FormControl> this.authForm.get('email');
  }
  get password(): FormControl{
    return <FormControl> this.authForm.get('password');
  }

  onSubmit(): void{
    console.log('AuthForm: ', this.authForm.value);
  }

}
