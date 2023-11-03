export interface Bien{
    id_bien :number,
    rue : string,
    numero : string,
    localite  : string,
    codepostal : number,
    est_louer :boolean,
    est_valider : boolean,
    location_prix:number,
    disponible :Date,
    caution_txt : string,
    caution_montant:number,
    id_proprietaire:number,
  }



// "id_bien": 1,
// "rue": "Des location",
// "numero": "162/0/1",
// "localite": "Charleroi",
// "codepostal": 6000,
// "est_louer": false,
// "est_valider": false,
// "location_prix": 600,
// "disponible": "2023-11-01T00:00:00",
// "caution_txt": "3 mois de loyer",
// "caution_montant": 1800,
// "id_proprietaire": 2