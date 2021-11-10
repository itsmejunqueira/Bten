import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login: any;
  senha: any;
  formlogin: FormGroup;
  returnUrl: string = "";
  hasError: boolean = false;
  hide = true;
  hide2 = true;

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
      senha2: ["", Validators.compose([Validators.required])],
      nome: ["", Validators.compose([Validators.required])],
    });
  }

  submit() {
    this.hasError = false;
    if(this.formlogin.valid){
      if(this.formlogin.value.senha == this.formlogin.value.senha2){
        this.router.navigate(["dash"]);
      }else{
        window.alert("As senhas são diferentes")
      }
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
