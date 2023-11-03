import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { Batiment } from 'src/app/models/batiment.model';
import { Bien } from 'src/app/models/bien.model';
import { Genre_piece } from 'src/app/models/genre_piece.model';
import { Piece } from 'src/app/models/piece.model';
import { BatimentService } from 'src/app/service/batiment.service';
import { BienService } from 'src/app/service/bien.service';
import { GenrepieceService } from 'src/app/service/genrepiece.service';
import { PieceService } from 'src/app/service/piece.service';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.scss']
})

export class MaisonComponent {
  min!:number;
  max!:number;
  cp!:number;
  listbatiment!: Batiment[];
  batiment!:Batiment;
  listbien!:Bien[];
  listpiece!:Piece[];
  listgenre_piece!:Genre_piece[];
  choix :boolean=true;
  photo!:string;
  constructor(
    private batimentService : BatimentService,
    private       bienService:BienService,
    private pieceService:PieceService,
    private genre_pieceService:GenrepieceService,
      ){}
ngOnInit(){
  this.gettoutgenre_piece()
}
      getall(){
        this.batimentService.getAll().subscribe({next : (list : Batiment[]) => {
          console.log(list)
    this.listbatiment=list
  }
  
}),
{}
}
getallmai(){
  this.batimentService.getByboolmai(this.choix).subscribe({next : (liste : Batiment[]) => {
    this.listbatiment=liste
    console.log(liste)
  }
}),
{}
}
getallapp(){
  this.batimentService.getByboolapp(this.choix).subscribe({next : (liste : Batiment[]) => {
    this.listbatiment=liste
    console.log(liste)
  }
}),
{}
}

getbatidbien(idbien:number){
  this.batimentService.getByidBat(idbien).subscribe({next : (liste : Batiment) => {
    this.batiment=liste
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
getpiece(id: number) {
  this.pieceService.getAllpiece(id).subscribe({next : (liste : Piece[]) => {
    this.listpiece=liste
    console.log(liste)
  }
  });
}
getgenre_piece(id: number) {
  this.genre_pieceService.getAllgenre_piece(id).subscribe({next : (liste : Genre_piece[]) => {
    this.listgenre_piece=liste
    console.log(liste)
  }
  });
}
gettoutgenre_piece() {
  this.genre_pieceService.gettoutgenre_piece().subscribe({next : (liste : Genre_piece[]) => {
    this.listgenre_piece=liste
    console.log(liste)
  }
  });
}
getallcp(){
  this.bienService.getAllcp(this.cp).subscribe({next : (liste : Bien[]) => {
    this.listbien=liste
    console.log(liste)
 }
 });
}

getallprix(){
  this.bienService.getAllprix(this.min,this.max).subscribe({next : (liste : Bien[]) => {
    this.listbien=liste
    console.log(liste)
 }
 });
}
getphoto(){
  this.photo="Tu les verra quand ca fonctionnera : Connard !"
}
}
