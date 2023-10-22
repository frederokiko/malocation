import { Component } from '@angular/core';
import { Personne } from 'src/app/models/personne.model';
import { User } from 'src/app/models/user.model';
import { PersonneService } from 'src/app/service/personne.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})

export class PersonneComponent {
constructor( private personneService : PersonneService,
             private userService: UserService){
              this.user = userService.getUser();
             }
isConnected! : boolean;
listPersonne !:Personne [];
registerOk!:boolean;
userRole! : string;
idrole!:number;
user: User | null;


ngOnInit() {
  this.personneService.statusSubject
      .subscribe({next : (status : boolean)=> this.isConnected = status})
      this.userRole  =(JSON.parse(localStorage.getItem("user") ?? "")).role
}

getall(){
  this.personneService.getAll().subscribe({next : (list : Personne[]) => {
    this.listPersonne=list
  }
}),
{}
}
setrole(id : number){
  console.log(id,this.idrole);
  
  this.personneService.setRole(id ,this.idrole).subscribe(
    {
      next : () => {
        this.registerOk = true
       
      },
      error : (err:any) => {
        console.log(err)
        
      }

    })

}

}
