import {Component} from '@angular/core';
import {Fabrica} from "../../Models/fabrica";
import {ApiService} from "../../services/api.service";
import {Motorista} from "../../Models/motorista";
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private apiService: ApiService) { }

  motoristas: Motorista[] = [];
  addmotorista: Motorista = new Motorista();

  fabricas: Fabrica[] = [];
  addfabricas: Fabrica = new Fabrica();

  addMotorista() {
    return this.apiService.enviarMotorista(this.addmotorista);
  }

  addFabrica() {
    return this.apiService.enviarFabrica(this.addfabricas);
  }

  onSubmit() {
    forkJoin({
      motorista: this.addMotorista(),
      fabrica: this.addFabrica()
    }).subscribe(
      (response) => {
        this.motoristas.push(response.motorista);
        this.fabricas.push(response.fabrica);
        console.log('Motorista e Fábrica adicionados com sucesso!');
        this.addmotorista = new Motorista();
        this.addfabricas = new Fabrica();
      },
      (error) => {
        console.log('Erro na solicitação:', error);
      }
    );
  }
}
