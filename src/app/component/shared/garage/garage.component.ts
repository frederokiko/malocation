import { Component, ElementRef, ViewChild } from '@angular/core';
import { Garage } from 'src/app/models/garage.model';
import { Photogarage } from 'src/app/models/photogarage.model';
import { GarageService } from 'src/app/service/garage.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})

export class GarageComponent {
constructor(private garageService:GarageService,
              ){}
             
listgarage !:Garage[];
listphotogarage! :Photogarage[];


getall(){
  this.garageService.getAll().subscribe({next : (list : Garage[]) => {
    this.listgarage=list
  }
}),
{}
}
getallgar(id:number){
  this.garageService.getAllgar(id).subscribe({next : (liste : Photogarage[]) => {
    this.listphotogarage=liste
    console.log(liste)
  }
}),
{}
}
}
