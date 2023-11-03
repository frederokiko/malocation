import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personne } from '../models/personne.model';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
    providedIn:'root'
})
export class PersonneService {
    private url : string = environement.apiurl
    get isConnected() : boolean {
        return localStorage.getItem("token") ? true : false
      }
    
      statusSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected);
    
      emitConnectionStatus() {
        this.statusSubject.next(this.isConnected)
      }
    
      constructor(
        private client : HttpClient,
        private toastr: ToastrService,
        private userService: UserService,
       
      ) { }
      getiduser() : number {
        let token = localStorage.getItem("token")?? ""
        let jwt : any = jwt_decode(token)
        return jwt["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid"]
      }
      getrole(): string {
        let token = localStorage.getItem("token")?? ""
        let jwt : any = jwt_decode(token)
        return jwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      }

      login(email: string, pwd: string) {
        this.client.post(this.url + 'Personne/login', { email: email, password: pwd }, { responseType: 'text' }).subscribe({
          next: (token: any) => {
            this.userService.updateUserFromToken(token); // Mettez à jour les informations de l'utilisateur via le service UserService
            localStorage.setItem('token', token);
            this.emitConnectionStatus();
          },
          error: (error) => {
            console.log(error.error);
          },
          complete: () => {
            console.log('aller bonne nuit loulou');
          }
        });
                        //({
                        //   next : (token : string) => {
                        //     localStorage.setItem("token", token)
                        //     this.emitConnectionStatus()
                        //   },
                        //   error :  (error) => {
                        //     console.log(error)
                        //     this.toastr.error("Erreur de connexion", "Erreur")
                        //   }
    
                        //  })
      }
    
      logout() {
        localStorage.clear()
        this.emitConnectionStatus();
      }
    
      register(newUser: any) : Observable<any> {
        return this.client.post(this.url+ "Personne",
                        newUser)
      }
    
      getAll() : Observable<Personne[]> {
        return this.client.get<Personne[]>(this.url + "Personne")
      }
    
      setRole(userid :number,roleid :number) : Observable<any> {
       return this.client.patch( this.url + "personne/setrole",
                         {userId :userid,roleId:roleid})
      }


}