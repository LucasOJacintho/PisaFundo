import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  httpClient: any;
  mainUrl = 'http://localhost:8080/veiculos'


  getAllVeiculos(): Observable<any> {
    const url =  this.mainUrl;
    return this.httpClient.get(url)
        .pipe(map((res) => res as Veiculo));
  }
}
