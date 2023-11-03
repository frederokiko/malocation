import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Garage } from '../models/garage.model';
import { Photogarage } from '../models/photogarage.model';
import { Piece } from '../models/piece.model';

@Injectable({
    providedIn:'root'
})
export class PieceService {
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
      getAllpiece(id : number) : Observable<Piece[]> {
        return this.client.get<Piece[]>(this.url + "piece/bat"+id)
      }
      addpiece(longueur :number,largeur:number,surface:number,commentaire:string,id_genre:number,id_batiment:number) : Observable<any> {
        return this.client.post ( this.url + "piece",
                          {longueur:longueur,largeur:largeur,surface:0,commentaire,id_genre:id_genre,id_batiment:id_batiment })
       }
}
// "longueur": 0,
//   "largeur": 0,
//   "surface": 0,
//   "commentaire": "string",
//   "id_genre": 0,
//   "id_batiment":