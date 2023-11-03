import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Garage } from '../models/garage.model';
import { Photogarage } from '../models/photogarage.model';
import { Piece } from '../models/piece.model';
import { Genre_piece } from '../models/genre_piece.model';

@Injectable({
    providedIn:'root'
})
export class GenrepieceService {
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
      getAllgenre_piece(id : number) : Observable<Genre_piece[]> {
        return this.client.get<Genre_piece[]>(this.url + "genre_piece"+id)
      }
      gettoutgenre_piece() : Observable<Genre_piece[]> {
        return this.client.get<Genre_piece[]>(this.url + "genre_piece")
      }
      addpiece(nom :string) : Observable<any> {
        return this.client.post ( this.url + "genre_piece",
                          {nom:nom })
       }
}