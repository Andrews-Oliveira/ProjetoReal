import {Component, OnInit} from '@angular/core';
import {Fabrica} from "../../Models/fabrica";
import {ApiService} from "../../services/api.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'] // Correção: use 'styleUrls' com 's'
})
export class RegistroComponent  implements OnInit {

  fabricas: Fabrica[] = [];
  novaFabrica: Fabrica = new Fabrica();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getFabrica();
  }

  getFabrica(){
    console.log('Chamando getFabrica');
    this.api.getFabrica().subscribe(
      (response: Fabrica[]) => {
        console.log('Resposta recebida:', response);
        this.fabricas = response;
      },
      (error) => {
        console.error('Erro ao chamar API:', error);
      }
    );
  }
}
