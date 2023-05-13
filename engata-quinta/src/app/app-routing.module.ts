import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadoBuscaComponent } from './veiculos/resultado-busca/resultado-busca.component';
import { BuscarVeiculosComponent } from './veiculos/buscar-veiculos/buscar-veiculos.component';
import { CadastrarVeiculoComponent } from './veiculos/cadastrar-veiculo/cadastrar-veiculo.component';
import { BuscarProprietariosComponent } from './proprietarios/buscar-proprietarios/buscar-proprietarios.component';
import { CadastrarProprietariosComponent } from './proprietarios/cadastrar-proprietarios/cadastrar-proprietarios.component';
import { ResultadoProprietariosComponent } from './proprietarios/resultado-proprietarios/resultado-proprietarios.component';
import { BuscarFornecedoresComponent } from './fornecedores/buscar-fornecedores/buscar-fornecedores.component';
import { ResultadosFornecedoresComponent } from './fornecedores/resultados-fornecedores/resultados-fornecedores.component';
import { CadastrarFornecedoresComponent } from './fornecedores/cadastrar-fornecedores/cadastrar-fornecedores.component';
import { DetalheVeiculosComponent } from './veiculos/detalhe-veiculos/detalhe-veiculos.component';
import { DetalheFornecedorComponent } from './fornecedores/detalhe-fornecedor/detalhe-fornecedor.component';

const routes: Routes = [
    { path: '', component: BuscarVeiculosComponent },
    { path: 'busca-veiculos', component: BuscarVeiculosComponent },
    { path: 'resultados-veiculos', component: ResultadoBuscaComponent },
    { path: 'cadastro-veiculos', component: CadastrarVeiculoComponent },
    { path: 'detalhe-veiculos', component: DetalheVeiculosComponent },
    { path: 'busca-proprietarios', component: BuscarProprietariosComponent },
    { path: 'resultados-proprietarios', component: ResultadoProprietariosComponent },
    { path: 'cadastro-proprietarios', component: CadastrarProprietariosComponent },
    { path: 'busca-fornecedores', component: BuscarFornecedoresComponent },
    { path: 'resultados-fornecedores', component: ResultadosFornecedoresComponent },
    { path: 'cadastro-fornecedores', component: CadastrarFornecedoresComponent },
    { path: 'detalhe-fornecedor', component: DetalheFornecedorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
