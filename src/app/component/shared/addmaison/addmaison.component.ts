import { Component } from '@angular/core';
import { Batiment } from 'src/app/models/batiment.model';
import { Bien } from 'src/app/models/bien.model';
import { Genre_piece } from 'src/app/models/genre_piece.model';
import { AddmaisonService } from 'src/app/service/addmaison.service';
import { BatimentService } from 'src/app/service/batiment.service';
import { BienService } from 'src/app/service/bien.service';
import { GenrepieceService } from 'src/app/service/genrepiece.service';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-addmaison',
  templateUrl: './addmaison.component.html',
  styleUrls: ['./addmaison.component.scss']
})
export class AddmaisonComponent {
  listbatiment!: Batiment[];
  dernierBatimentId!: number;
  dernierBatId!: number;
  dernierProprietaireId!: number;
  constructor(private _addmaisonService:AddmaisonService,
              private genrepieceService:GenrepieceService,
              private bienService:BienService,
              private batimentService:BatimentService,
              private personneService : PersonneService,
){}
selectedGenreId!: number ;
id_pers!:number
// addbien
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
//addbatiment
type_maison!:boolean
type_appartement!:boolean
charge_comprise!:boolean
chaufage_central!:boolean
id_bienb!:number
//addpiece
longueur!:number
largeur!:number
commentaire!:string
id_genre!:number
id_batiment!:number
listgenre_piece!:Genre_piece[]
nom !: string
myFile? : File
url : string = ""
//boutonclick
button1Clicked: boolean = false;
button2Clicked: boolean = false;
button3Clicked: boolean = false;
button4Clicked: boolean = false;
listbien!:Bien[];
//recu
idb!:number
dernierBienId ! : number
idpersonne!:number;
role!:string;

ngOnInit(){

    this.genrepieceService.gettoutgenre_piece().subscribe({next : (list : Genre_piece[]) => {
      console.log(list)
      this.listgenre_piece=list
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
    
  }),
  {}
  
}
onClickButton1() {
  
    this._addmaisonService.addproprio(this.idpersonne).subscribe((insertedId: number) => {
      // Utilisez l'ID inséré ici.
      this.id_proprietaire = insertedId
      console.log("ID inséré propriétaire : " + this.id_proprietaire );
      this.button1Clicked = true;

    });
      this.personneService.setRole(this.idpersonne ,2).subscribe()
}

onClickButton2( ){
 
   setTimeout(() => {}, 500);
  this._addmaisonService.addbien(
    this.rue,
    this. numero,
     this.localite,
      this.codepostal,
      this. est_louer,
      this.location_prix,
      this. disponible,
      this. caution_txt,
       this.caution_montant,
       this. id_proprietaire)
  .subscribe((insertedId: number) => {
    // Utilisez l'ID inséré ici.
    this.dernierBienId = insertedId
    console.log("ID inséré bien : " + this.dernierBienId );
    this.button2Clicked = true;
  });
}
onClickButton3(){
  this._addmaisonService.addbatiment(this.type_maison,this.type_appartement,this.charge_comprise,this.chaufage_central,this.dernierBienId)
  .subscribe((insertedId: number) => {
    // Utilisez l'ID inséré ici.
    this.dernierBatId = insertedId
    console.log("ID inséré bat  : " + this.dernierBatId );
  });
  this.button3Clicked = true;
}
onClickButton4() {
  // Utilisez this.selectedGenreId pour obtenir l'ID du genre sélectionné
  const selectedGenreId = this.selectedGenreId;
  // Le reste de votre logique pour ajouter la pièce...
  this._addmaisonService.addpiece(this.longueur, this.largeur, this.commentaire,this.selectedGenreId, this.dernierBatId).subscribe(() => {
    // Réinitialisez la sélection après avoir ajouté la pièce si nécessaire
    this.selectedGenreId =1;
    this.longueur=0;
    this.largeur=0;
    this.commentaire="";
    this.button4Clicked = true;
    setTimeout(() => {
      this.button4Clicked = false;
    }, 5000);
  });
}
// bouton true  à false
onTypeChange(changedType: string) {
  if (changedType === 'maison' && this.type_maison) {
    this.type_appartement = false;
  } else if (changedType === 'appartement' && this.type_appartement) {
    this.type_maison = false;
  }
}


}
