import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fg! : FormGroup

  registerOk! : boolean;
  isConnected! :boolean;

  constructor(
    private personneService : PersonneService,
    private router : Router,
    private builder : FormBuilder
    ) {}

    
  ngOnInit(){
    this.personneService.statusSubject
    .subscribe({next : (status : boolean)=> this.isConnected = status})
    this.fg = this.builder.group({
      nom : [null, Validators.required],
      prenom : [null, Validators.required],
      date_naissance:[null, Validators.required],
      email : [null, [Validators.required, Validators.email]], 
      nickname : [null, Validators.required],   
      passwd : [null, Validators.required],
      confirmpwd : [null, [Validators.required]],
      rue : [null, Validators.required],
      numero : [null, Validators.required],
      localite : [null, Validators.required],
      codepostal: [null, [Validators.required,]],
      gsm : [null, Validators.required],
      telfixe : [null],
    })
  }
  //Nom,Prenom,Date_naissance,Email,Nickname,Passwd,Rue,Numero,Localite,Codepostal,Gsm,Telfixe
  onSubmit() {
    this.personneService.register(this.fg.value).subscribe(
      {
        next : () => {
          this.registerOk = true
          setTimeout(() => this.router.navigate(["login"]), 2500)
        },
        error : (err:any) => {
          console.log(err)
          this.fg.reset()
        }

      }
    )
  }

  confirmPassword() : ValidatorFn {
    return (control : AbstractControl) => {
      let originControl : AbstractControl = this.fg.controls["password"] ?? undefined
      let pwdOrigin = originControl.value
      let pwdConfirm = control.value

      if(originControl.value != null) {
        if(pwdConfirm == pwdOrigin) {
          return null
        }
        return {pwdError : "Les deux mdp ne correspondent pas"}
      }
      return null
    }
  }

  

}
