import { HttpClientModule } from '@angular/common/http';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriadorPlacaModule } from './veiculos/criador-placa/criador-placa.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { HeaderComponent } from './shared/header/header.component';
import { RadioButtonComponent } from './shared/radio-button/radio-button.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { InformacaoComponent } from './shared/informacao/informacao.component';
import { ActionModalComponent } from './shared/action-modal/action-modal.component';
import { ButtonComponent } from './shared/button/button.component';
import { ResultadoBuscaComponent } from './veiculos/resultado-busca/resultado-busca.component';
import { CadastrarVeiculoComponent } from './veiculos/cadastrar-veiculo/cadastrar-veiculo.component';
import { BuscarVeiculosComponent } from './veiculos/buscar-veiculos/buscar-veiculos.component';
import { TabelaComponent } from './shared/tabela/tabela.component';
import { BuscarProprietariosComponent } from './proprietarios/buscar-proprietarios/buscar-proprietarios.component';
import { CadastrarProprietariosComponent } from './proprietarios/cadastrar-proprietarios/cadastrar-proprietarios.component';
import { ResultadoProprietariosComponent } from './proprietarios/resultado-proprietarios/resultado-proprietarios.component';
import { BuscarFornecedoresComponent } from './fornecedores/buscar-fornecedores/buscar-fornecedores.component';
import { CadastrarFornecedoresComponent } from './fornecedores/cadastrar-fornecedores/cadastrar-fornecedores.component';
import { ResultadosFornecedoresComponent } from './fornecedores/resultados-fornecedores/resultados-fornecedores.component';
import { DetalheVeiculosComponent } from './veiculos/detalhe-veiculos/detalhe-veiculos.component';
import { DetalheFornecedorComponent } from './fornecedores/detalhe-fornecedor/detalhe-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    HeaderComponent,
    RadioButtonComponent,
    SearchBarComponent,
    InformacaoComponent,
    ActionModalComponent,
    ButtonComponent,
    ResultadoBuscaComponent,
    CadastrarVeiculoComponent,
    BuscarVeiculosComponent,
    TabelaComponent,
    BuscarProprietariosComponent,
    CadastrarProprietariosComponent,
    ResultadoProprietariosComponent,
    BuscarFornecedoresComponent,
    CadastrarFornecedoresComponent,
    ResultadosFornecedoresComponent,
    DetalheVeiculosComponent,
    DetalheFornecedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CriadorPlacaModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
