import {Component, OnInit} from '@angular/core';
import {Fabrica} from "../../Models/fabrica";
import {ApiService} from "../../services/api.service";
import {NgForm} from "@angular/forms";
import {Motorista} from "../../Models/motorista";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{
  constructor(private apiService: ApiService) { }

  motoristas: Motorista[] = [];
  addmotorista: Motorista = new Motorista();

  fabricas: Fabrica[] = [];
  addfabricas: Fabrica = new Fabrica();

  addMotorista() {
    this.apiService.enviarMotorista(this.addmotorista).subscribe(
      (response: Motorista) => {
        this.motoristas.push(response);
        console.log('Marca adicionada com sucesso!');
        this.addmotorista = new Motorista();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addFabrica() {
    this.apiService.enviarFabrica(this.addfabricas).subscribe(
      (response: Fabrica) => {
        this.fabricas.push(response);
        console.log('Marca adicionada com sucesso!');
        this.addfabricas = new Fabrica();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  protected readonly Motorista = Motorista;
}






//   enviarMotorista(form: NgForm) {
//     if (form.valid) {
//       this.apiService.enviarMotorista(form.value).subscribe(
//         response => {
//           console.log('Dados enviados com sucesso', response);
//         },
//         error => {
//           console.error('Erro ao enviar dados', error);
//         }
//       );
//     }
//   }
// }
