import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss','../../app.component.scss']
})
export class SearchBarComponent {

  @Input() propriedades: any[] = []
  @Input() tela: string | undefined;
  @Output() selecionarPropriedadeEvent = new EventEmitter<string>()
  @Output() procurarValorEvent = new EventEmitter<any>()
  valorBusca: string = ""
  propriedade: any | undefined;
  preenchimento: string = "Insira o valor a ser pesquisado."
  size: number | undefined;
  mensagemAlerta: string = '';


  procurarValor() {
    if(!this.propriedade.regex.test(this.valorBusca)) {
      if (this.valorBusca?.length === this.propriedade.validador) {
        let objeto = {
          valor: this.valorBusca,
          propriedade: this.propriedade.value
        };
        this.procurarValorEvent.emit(objeto);
      } else this.mensagemDeErro("O valor inserido não possui o número de caracteres corretos")
    } else this.mensagemDeErro("O valor possui caracteres invalidos")
  }

  propriedadeSelecionada(propriedadeSelecionada :any) {
    this.propriedade = propriedadeSelecionada
    this.size = this.propriedade.validador;
    this.preenchimento = propriedadeSelecionada.preenchimento
  }

  validarCaracter() {
    if(this.propriedade.value !== "modelo") {
      let caracter = this.valorBusca[this.valorBusca.length-1]
      if(this.propriedade.regex.test(caracter)){
        let valorArray = this.valorBusca.split("");
        valorArray.pop();
        this.valorBusca = valorArray.join('');
      }
    }
  }

  mensagemDeErro(mensagem: string) {
    this.mensagemAlerta = mensagem;
    setTimeout(() => {
      this.mensagemAlerta = ""
    }, 3000 )
  }
}
