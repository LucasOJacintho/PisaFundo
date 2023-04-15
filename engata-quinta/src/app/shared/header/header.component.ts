import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss'],
})
export class HeaderComponent {
  veiculos: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}


  navegacao(valor : string){
    switch(valor) {
      case 'buscar':
        this.router.navigate(['/busca'], {relativeTo: this.activatedRoute});
        break;

      case 'cadastrar':
        this.router.navigate(['/cadastro'], {relativeTo: this.activatedRoute});
        break;
      }
  }
}
