import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss','../../app.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() propriedades: any[] = []
  @Output() selecionarPropriedadeEvent = new EventEmitter<any>()
  propriedadeSelecionada: any

  ngOnInit(): void {
    this.propriedades?.length > 0 ? this.selecionarPropriedade(this.propriedades[0]) : undefined;
  }

  selecionarPropriedade(propriedade: any){
    this.propriedadeSelecionada = propriedade;
    this.selecionarPropriedadeEvent.emit(this.propriedadeSelecionada)
  }

}
