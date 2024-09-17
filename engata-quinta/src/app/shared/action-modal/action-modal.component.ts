import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionModal } from './actionModal';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss'],
})
export class ActionModalComponent {
  @Input() modal: ActionModal = {
    showModal: false,
    mensagem: '',
    detalhes: '',
    alerta: '',
    cancelar: 'Cancelar',
    continuar: 'Continuar',
  };
  @Output() continuarEvent = new EventEmitter<string>()
  @Output() cadastrarProprietarioEvent = new EventEmitter<string>()

  fecharModal() {
    this.modal.showModal = false
  }

  continuar() {
    if(this.modal.mensagem === "Documento não localizado") {
      this.cadastrarProprietarioEvent.emit(this.modal.continuar)
    } else {
      this.continuarEvent.emit(this.modal.continuar)
    }
    
  }
}
