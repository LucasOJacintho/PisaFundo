import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss','../../app.component.scss'],
})

export class SearchBarComponent implements OnInit {

  @Input() propriedades: any[] = []
  @Input() tela: string | undefined;
  @Output() selecionarPropriedadeEvent = new EventEmitter<string>()
  @Output() procurarValorEvent = new EventEmitter<any>()
  valorBusca: string = ""
  propriedade: any | undefined;
  preenchimento: string = "Favor inserir valor válido";
  size: number = 11;
  mensagemAlerta: string = '';

  ngOnInit() {

  }

  procurarValor() {
    if(!this.propriedade.regex?.test(this.valorBusca)) {
      if (this.valorBusca?.length === this.propriedade.validador || this.propriedade.value === 'modelo') {
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
