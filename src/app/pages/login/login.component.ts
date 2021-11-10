import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any;
  senha: any;
  formlogin: FormGroup;
  returnUrl: string = "";
  hasError: boolean = false;
  hide = true;

    constructor(
      // private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }


  loadForm() {
    this.formlogin = this.fb.group({
      login: ["", Validators.compose([Validators.required, Validators.email])],
      senha: ["", Validators.compose([Validators.required])],
    });
  }

  submit() {
    this.hasError = false;
    if(this.formlogin.valid){
      this.router.navigate(["dash"]);
    }
    // this.authService.login(this.formlogin.value.login, this.formlogin.value.senha)
    //   .subscribe((user) => {
    //     if (user) {
    //       this.router.navigate([this.returnUrl]);
    //     } else {
    //       this.hasError = true;
    //     }
    //   });
  }
}
