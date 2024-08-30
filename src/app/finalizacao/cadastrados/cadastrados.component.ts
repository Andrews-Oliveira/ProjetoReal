import { Component, OnInit } from '@angular/core';
import { ApiService} from "../../services/api.service";
import {Motorista} from "../../Models/motorista";
import {Fabrica} from "../../Models/fabrica";

@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.component.html',
  styleUrls: ['./cadastrados.component.css']
})
export class CadastradosComponent implements OnInit {
  motoristas: Motorista[] = [];
  fabricas: Fabrica[] = [];
  displayedMotoristaColumns: string[] = ['id', 'name', 'cpf', 'cnh', 'data_nascimento', 'endereco', 'telefone', 'email', 'actions'];
  displayedFabricaColumns: string[] = ['id', 'nome_fabrica', 'turno_fabrica', 'placa_veiculo', 'numero_rota', 'quantidade_funcionarios', 'data', 'hora_inicio', 'hora_fim', 'rotas_frequentes', 'actions'];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMotoristas();
    this.loadFabricas();
  }

  loadMotoristas(): void {
    this.apiService.getMotorista().subscribe(
      (data) => this.motoristas = data,
      (error) => console.error('Erro ao carregar motoristas', error)
    );
  }

  loadFabricas(): void {
    this.apiService.getFabrica().subscribe(
      (data) => this.fabricas = data,
      (error) => console.error('Erro ao carregar fábricas', error)
    );
  }

  removeMotorista(id: number): void {
    this.apiService.removeMotorista(id).subscribe(
      () => {
        // Atualize a lista após a remoção
        this.motoristas = this.motoristas.filter(motorista => motorista.id !== id);
      },
      (error) => console.error('Erro ao remover motorista', error)
    );
  }

  removeFabrica(id: number): void {
    this.apiService.removeFabrica(id).subscribe(
      () => {
        // Atualize a lista após a remoção
        this.fabricas = this.fabricas.filter(fabrica => fabrica.id !== id);
      },
      (error) => console.error('Erro ao remover fábrica', error)
    );
  }
}
