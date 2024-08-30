import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motorista } from '../Models/motorista';
import { Fabrica } from '../Models/fabrica';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/motorista/'; // URL da sua API para motoristas
  private apiUrlfabrica = 'http://127.0.0.1:8000/api/fabrica/'; // URL da sua API para fábricas

  constructor(private http: HttpClient) { }

  public enviarMotorista(motorista: Motorista): Observable<Motorista> {
    return this.http.post<Motorista>(this.apiUrl, motorista);
  }

  public enviarFabrica(fabrica: Fabrica): Observable<Fabrica> {
    return this.http.post<Fabrica>(this.apiUrlfabrica, fabrica);
  }

  public getMotorista(): Observable<Motorista[]> {
    return this.http.get<Motorista[]>(this.apiUrl);
  }

  public getFabrica(): Observable<Fabrica[]> {
    return this.http.get<Fabrica[]>(this.apiUrlfabrica);
  }

  public removeMotorista(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

  public removeFabrica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlfabrica}${id}/`);
  }
}
