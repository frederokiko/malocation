import { Component, ElementRef, ViewChild } from '@angular/core';
import { Bien } from 'src/app/models/bien.model';
import { Garage } from 'src/app/models/garage.model';
import { Photogarage } from 'src/app/models/photogarage.model';
import { BienService } from 'src/app/service/bien.service';
import { GarageService } from 'src/app/service/garage.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})

export class GarageComponent {
  listbien!: Bien[];
       

constructor(private garageService:GarageService,
            private bienService : BienService,
              ){}
              listgarage !:Garage[];
              listphotogarage! :Photogarage[];
             
              idBien!: number;
              rue!: string;
              numero!: string;
              localite!: string;
              codepostal!: number;
              cautionMontant!: number;
              cautionTxt!: string;
              disponible!: Date;
              estLoue!: boolean;
              estValide!: boolean;
              idProprietaire!: number;
              locationPrix!: number;



getall(){
  this.garageService.getAll().subscribe({next : (list : Garage[]) => {
    console.log(list)
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
getbien(id: number) {
  this.bienService.getByIdBien(id).subscribe({next : (liste : Bien[]) => {
    this.listbien=liste
    console.log(liste)
  }
  });
}

}
