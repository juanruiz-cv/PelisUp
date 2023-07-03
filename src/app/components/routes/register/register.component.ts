import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/services/auth/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private user: User = {
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
  };

  formUser: FormGroup = this.formBuilder.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private _authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  validForm(campo: string) {
    return (
      this.formUser.controls[campo].errors &&
      this.formUser.controls[campo].touched
    );
  }

  sendUser() {
    if (this.formUser.invalid) {
      this.formUser.markAllAsTouched();
      return;
    }
    this.registrar(
      this.formUser.controls['email'].value,
      this.formUser.controls['password'].value
    );
  }

  registrar(email: string, password: string) {
    this._authService
      .registrar(email, password)
      .then((userCredential) => {
        const { uid, displayName, photoURL, email } =
          userCredential.user.multiFactor.user;

        this.user.uid = uid;
        this.user.displayName = displayName;
        this.user.photoURL = photoURL;
        this.user.email = email;

        localStorage.setItem('User', JSON.stringify(this.user));
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  loginWithGoogle() {
    this._authService
      .loginWithGoogle()
      .then((userCredential) => {
        const { uid, displayName, photoURL, email } =
          userCredential.user.multiFactor.user;

        this.user.uid = uid;
        this.user.displayName = displayName;
        this.user.photoURL = photoURL;
        this.user.email = email;

        localStorage.setItem('User', JSON.stringify(this.user));
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
}
