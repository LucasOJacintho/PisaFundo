import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CriadorPlacaComponent } from './criador-placa.component';
import { SeletorPlacaComponent } from './seletor-placa/seletor-placa.component';
import { TipoPlacaComponent } from './tipo-placa/tipo-placa.component';


@NgModule({
  declarations: [
    CriadorPlacaComponent, SeletorPlacaComponent, TipoPlacaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CriadorPlacaComponent
  ],
  providers: [],
})
export class CriadorPlacaModule { }
