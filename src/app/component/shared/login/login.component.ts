import { Component } from '@angular/core';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string
  pwd! : string
  isConnected! : boolean

  constructor(private personneService : PersonneService){}

  ngOnInit() {
    this.personneService.statusSubject
        .subscribe({next : (status : boolean)=> this.isConnected = status})

  }
  login(){
    this.personneService.login(this.email, this.pwd)
  }
  logout() {
    this.personneService.logout()
  }
  getall(){
    this.personneService.getAll()
  }

}
