import { Component } from '@angular/core';
import { AddgarageService } from 'src/app/service/addgarage.service';
import { AddmaisonService } from 'src/app/service/addmaison.service';
import { GarageService } from 'src/app/service/garage.service';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-addgarage',
  templateUrl: './addgarage.component.html',
  styleUrls: ['./addgarage.component.scss']
})
export class AddgarageComponent {
  dernierBienId!: number;
  idpersonne!: number;
  role!: string;
  constructor(private _addgarageService:AddgarageService,
              private garageService:GarageService,
              private personneService :PersonneService,
              private _addmaisonService : AddmaisonService,
    ){}
    id_pers!:number

      longueur!:number
      largeur!:number
      surface:number=0
      id_bien!:number

  rue!: string
  numero!: string;
  localite!:string
  codepostal!:number
  est_louer!: boolean
  location_prix!:number
  disponible!: Date
  caution_txt!: string
  caution_montant!:number
  id_proprietaire!:number

  nom !: string
myFile? : File
url : string = ""

ngOnInit(){
  this.idpersonne=this.personneService.getiduser()
  console.log(this.idpersonne)
  this.role=this.personneService.getrole()
   console.log(this.role)
   if (this.role==="Prop"){
    this._addmaisonService.getByIdPers(this.idpersonne).subscribe({next : (liste : number) => {
     this.id_proprietaire=liste
     console.log(this.id_proprietaire)
   }
 }),
 {}
 }
}

  addproprio(){
    this._addgarageService.addproprio(this.idpersonne).subscribe((insertedId: number) => {
      // Utilisez l'ID inséré ici.
      this.id_proprietaire = insertedId
      console.log("ID inséré propriétaire : " + this.id_proprietaire );
      

    });
      this.personneService.setRole(this.idpersonne ,2).subscribe()
  }
  addBien( ){
    this._addgarageService.addbien(this.rue,this.numero,this.localite,this.codepostal,this.est_louer,this.location_prix,this.disponible,this.caution_txt,this.caution_montant,this.id_proprietaire).subscribe((insertedId: number) => {
      // Utilisez l'ID inséré ici.
      this.dernierBienId = insertedId
      console.log("ID inséré bien : " + this.dernierBienId );
    })
  }
  addGarage(){
    this._addgarageService.addgarrage(this.longueur,this.largeur,this.surface,this.dernierBienId).subscribe( {})
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