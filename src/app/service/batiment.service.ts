import { Injectable } from '@angular/core';
import { environement } from '../environement';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Garage } from '../models/garage.model';
import { Photogarage } from '../models/photogarage.model';
import { Batiment } from '../models/batiment.model';

@Injectable({
    providedIn:'root'
})
export class BatimentService {
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

      getByboolapp(choix : boolean) : Observable<Batiment[]> {
        return this.client.get<Batiment[]>(this.url + "batiment/app"+choix)
      }
      getByboolmai(choix : boolean) : Observable<Batiment[]> {
        return this.client.get<Batiment[]>(this.url + "batiment/mai"+choix)
      }
      getByid(id : number) : Observable<Batiment[]> {
        return this.client.get<Batiment[]>(this.url + "batiment"+id)
      }
      getByidBat(id : number) : Observable<Batiment> {
        return this.client.get<Batiment>(this.url + "batiment/bien"+id)
      }
      getAll() : Observable<Batiment[]> {
        return this.client.get<Batiment[]>(this.url + "batiment/")
      }
      addBat(type_maison : boolean,type_appartement : boolean,charge_comprise  : boolean,chaufage_central : boolean,id_bien :number,) : Observable<any> {
        return this.client.post ( this.url + "batiment",
                          {type_appartement:type_appartement,charge_comprise:charge_comprise,chaufage_central:chaufage_central,id_bien:id_bien })
       }


}