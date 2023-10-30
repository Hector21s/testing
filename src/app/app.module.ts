import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media/media.component';
import { RegresionLinealComponent } from './regresion-lineal/regresion-lineal.component';
import { CorrelacionComponent } from './correlacion/correlacion.component';
import { SimpsonComponent } from './simpson/simpson.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    RegresionLinealComponent,
    CorrelacionComponent,
    SimpsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
