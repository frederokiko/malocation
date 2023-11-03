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
export class GarageService {
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
    
   
      getAll() : Observable<Garage[]> {
        return this.client.get<Garage[]>(this.url + "Garage")
      }

      getAllgar(id : number) : Observable<Photogarage[]> {
        return this.client.get<Photogarage[]>(this.url + "Photo/gar"+id)
      }
      // Pour uploader photos garage
      upload(nom :string,fileToUpload : File) : Observable<any> {
        let formData : FormData = new FormData()
        formData.append('image', fileToUpload, fileToUpload.name)
        return this.client.post ( this.url + "photo/garage",
                          {nom :nom,photos:formData })
       }
      //  upload(fileToUpload : File) : Observable<string> {
      //   let formData : FormData = new FormData()
      //   formData.append('myfile', fileToUpload, fileToUpload.name)
      //   return this._client.post(this.url, formData, {responseType : 'text'})
      // }
    
    //   setRole(userid :number,roleid :number) : Observable<any> {
    //    return this.client.patch( this.url + "personne/setrole",
    //                      {userId :userid,roleId:roleid})
    //   }


}