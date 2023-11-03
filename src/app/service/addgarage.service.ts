import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Garage } from '../models/garage.model';
import { Photogarage } from '../models/photogarage.model';

@Injectable({
    providedIn:'root'
})
export class AddgarageService {
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
       
       
      ) { }
      addproprio(id_p :number) : Observable<any> {
        return this.client.post ( this.url + "proprietaire",
                          {id_personne :id_p })
       }

       addbien(rue :string,numero:string,localite:string,codepostal:number,est_louer:boolean,prix:number,disponible:Date,caution_txt:string,caution_montant:number,id_proprietaire:number) : Observable<any> {
        return this.client.post ( this.url + "bien",
                          {rue :rue,numero:numero,localite:localite,codepostal:codepostal,est_louer:est_louer,location_prix:prix,disponible:disponible,caution_txt:caution_txt,caution_montant:caution_montant,id_proprietaire:id_proprietaire })
       }

       addgarrage(longueur :number,largeur:number,surface:number,id_bien:number) : Observable<any> {
        return this.client.post ( this.url + "garage",
                          {longueur:longueur,largeur:largeur,surface:0,id_bien:id_bien })
       }

       
      }
 

    //    "longueur": 0,
    //    "largeur": 0,
    //    "surface": 0,
    //    "id_bien": 0

//       "rue": "string",
//   "numero": "string",
//   "localite": "string",
//   "codepostal": 0,
//   "est_louer": true,
//   "location_prix": 0,
//   "disponible": "2023-10-24T08:45:19.540Z",
//   "caution_txt": "string",
//   "caution_montant": 0,
//   "id_proprietaire": 0