import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs';
import { Fabrica } from '../Models/fabrica'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root' // Isso torna o serviço disponível em toda a aplicação
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/fabrica/'; // URL da API

  constructor(private http: HttpClient) { }

  getFabrica(): Observable<Fabrica[]> {
    return this.http.get<Fabrica[]>(`${this.apiUrl}`);
  }
}
