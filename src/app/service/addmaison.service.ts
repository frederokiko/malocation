import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Garage } from '../models/garage.model';
import { Photogarage } from '../models/photogarage.model';

@Injectable({
    providedIn:'root'
})
export class AddmaisonService {
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
      surface:number=0;
      addproprio(id_p :number) : Observable<number> {
        return this.client.post <number> ( this.url + "proprietaire",
                          {id_personne :id_p })
       }
       addbien(rue: string, numero: string, localite: string, codepostal: number, est_louer: boolean, prix: number, disponible: Date, caution_txt: string, caution_montant: number, id_proprietaire: number): Observable<number> {
        return this.client.post<number>(this.url + "bien", {
          rue: rue,
          numero: numero,
          localite: localite,
          codepostal: codepostal,
          est_louer: est_louer,
          location_prix: prix,
          disponible: disponible,
          caution_txt: caution_txt,
          caution_montant: caution_montant,
          id_proprietaire: id_proprietaire
        })
      }
       addbatiment(type_maison:boolean,type_appartement:boolean,charge_comprise:boolean,chaufage_central:boolean,id_bien:number) : Observable<number> {
        return this.client.post<number> ( this.url + "batiment",
                          {type_maison:type_maison,type_appartement:type_appartement,charge_comprise:charge_comprise,chaufage_central:chaufage_central,id_bien:id_bien })
       }
       addpiece(longueur:number,largeur:number,commentaire:string,id_genre:number,id_batiment:number) : Observable<any> {
        return this.client.post ( this.url + "piece",
                          {longueur:longueur,largeur:largeur,surface:this.surface,commentaire:commentaire,id_genre:id_genre,id_batiment:id_batiment })
       }
       getByIdPers(id : number) : Observable<number> {
        return this.client.get<number>(this.url + "proprietaire/pers"+id)
      }

}
// "longueur": 0,
//   "largeur": 0,
//   "surface": 0,
//   "commentaire": "string",
//   "id_genre": 0,
//   "id_batiment": 0
// "type_maison": true,
// "type_appartement": true,
// "charge_comprise": true,
// "chaufage_central": true,
// "id_bien": 0