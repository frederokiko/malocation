import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{ButtonModule}from 'primeng/button';
import{BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { NavComponent } from './component/shared/nav/nav.component';
import { LoginComponent } from './component/shared/login/login.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { RegisterComponent } from './component/shared/register/register.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { PersonneComponent } from './component/shared/personne/personne.component';
import { AcceuilComponent } from './component/shared/acceuil/acceuil.component';
import { GarageComponent } from './component/shared/garage/garage.component';
import { MaisonComponent } from './component/shared/maison/maison.component';
import { AddmaisonComponent } from './component/shared/addmaison/addmaison.component';
import { AddgarageComponent } from './component/shared/addgarage/addgarage.component';
import  {  NgxImageZoomModule  }  from  'ngx-image-zoom' ;
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ErreurComponent } from './component/shared/erreur/erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    PersonneComponent,
    AcceuilComponent,
    GarageComponent,
    MaisonComponent,
    AddmaisonComponent,
    AddgarageComponent,
    ErreurComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    InputTextModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    CardModule,
   CalendarModule,
   NgxImageZoomModule,
   AccordionModule,
   CheckboxModule,
   MultiSelectModule,
   InputTextareaModule,
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
