import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Garage } from '../models/garage.model';
import { Photogarage } from '../models/photogarage.model';
import { Bien } from '../models/bien.model';

@Injectable({
    providedIn:'root'
})
export class BienService {
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

      getByIdBien(id : number) : Observable<Bien[]> {
        return this.client.get<Bien[]>(this.url + "bien/"+id)
      }
      getAllBien() : Observable<Bien[]> {
        return this.client.get<Bien[]>(this.url + "bien")
      }
      getAllcp(cp:number):Observable<Bien[]>{
        return this.client.get<Bien[]>(this.url + "bien/cp"+cp)
      }
      // getAllprix(min:number,max:number):Observable<Bien[]>{
      //   console.log(min,max)
      //   return this.client.get<Bien[]>(this.url + "bien/prix"+min+max)
      // }
      getAllprix(min: number, max: number): Observable<Bien[]> {
        const params = new HttpParams()
          .set('min', min.toString())
          .set('max', max.toString());
      
        return this.client.get<Bien[]>(this.url + 'bien/prix', { params: params });
      }
      
}