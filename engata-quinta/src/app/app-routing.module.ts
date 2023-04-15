import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ResultadoBuscaComponent } from './veiculos/resultado-busca/resultado-busca.component';
import { BuscarVeiculosComponent } from './veiculos/buscar-veiculos/buscar-veiculos.component';
import { CadastrarVeiculoComponent } from './veiculos/cadastrar-veiculo/cadastrar-veiculo.component';

const routes: Routes = [
    { path: '', component: BuscarVeiculosComponent },
    { path: 'busca', component: BuscarVeiculosComponent },
    { path: 'resultados', component: ResultadoBuscaComponent },
    { path: 'cadastro', component: CadastrarVeiculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
