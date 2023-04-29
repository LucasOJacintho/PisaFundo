import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadoBuscaComponent } from './veiculos/resultado-busca/resultado-busca.component';
import { BuscarVeiculosComponent } from './veiculos/buscar-veiculos/buscar-veiculos.component';
import { CadastrarVeiculoComponent } from './veiculos/cadastrar-veiculo/cadastrar-veiculo.component';
import { BuscarProprietariosComponent } from './proprietarios/buscar-proprietarios/buscar-proprietarios.component';
import { CadastrarProprietariosComponent } from './proprietarios/cadastrar-proprietarios/cadastrar-proprietarios.component';
import { ResultadoProprietariosComponent } from './proprietarios/resultado-proprietarios/resultado-proprietarios.component';

const routes: Routes = [
    { path: '', component: BuscarVeiculosComponent },
    { path: 'busca-veiculos', component: BuscarVeiculosComponent },
    { path: 'resultados-veiculos', component: ResultadoBuscaComponent },
    { path: 'cadastro-veiculos', component: CadastrarVeiculoComponent },
    { path: 'busca-proprietarios', component: BuscarProprietariosComponent },
    { path: 'resultados-proprietarios', component: ResultadoProprietariosComponent },
    { path: 'cadastro-proprietarios', component: CadastrarProprietariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
