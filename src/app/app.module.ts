import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {FrutaComponent} from './fruta/fruta.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ConversorPipe} from './pipes/conversor.pipe';
import {CochesComponent} from './coches/coches.component';
import {HttpModule} from '@angular/http';
import {PlantillasComponent} from './Plantillas/plantillas.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    FrutaComponent,
    HomeComponent,
    ContactoComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
