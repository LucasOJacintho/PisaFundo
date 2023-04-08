import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-criador-placa',
  templateUrl: './criador-placa.component.html',
  styleUrls: ['./criador-placa.component.scss']
})
export class CriadorPlacaComponent {
  @Input() placaNova : boolean | undefined;

  ngOnInit(): void {
    
  }

  alterarPlaca(value: boolean) {
    this.placaNova = value;
  }
}
