import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/shared/acceuil/acceuil.component';
import { AddgarageComponent } from './component/shared/addgarage/addgarage.component';
import { AddmaisonComponent } from './component/shared/addmaison/addmaison.component';
import { GarageComponent } from './component/shared/garage/garage.component';

import { LoginComponent } from './component/shared/login/login.component';
import { MaisonComponent } from './component/shared/maison/maison.component';
import { PersonneComponent } from './component/shared/personne/personne.component';
import { RegisterComponent } from './component/shared/register/register.component';

const routes: Routes = [
  {path : "register", component : RegisterComponent},
  {path : "login",component : LoginComponent},
  {path : "personne",component : PersonneComponent},
  {path : "acceuil",component : AcceuilComponent},
  {path : "maison",component : MaisonComponent},
  {path : "garage",component : GarageComponent},
  {path :"addmaison",component : AddmaisonComponent},
  {path :"addgarage",component: AddgarageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
