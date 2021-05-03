import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

interface Paciente {
  id: number;
  pacienteID: string;
  nombre: string;
  apellido: string;
  telefono: string;
  sexo: string;
  fechaNacimiento: string;
}

interface Resultados {
  id: number;
  pacienteID: string;
  doctor: string;
  centroMedico: string;
  fechaResultado: string;
}


interface Analitica {
  id: number;
  resultadoID: string;
  tipo: string;
  valor: string;
  rango: string;
}

@Injectable({
  providedIn: 'root'
})

export class PacienteService {

  endPoint = location.origin;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getPaciente(): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.endPoint + '/api/Paciente/?PacienteID=')
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  getResultados(): Observable<Resultados> {
    return this.httpClient.get<Resultados>(this.endPoint + '/api/Resultado/?PacienteID=')
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }


  getAnaliticas(): Observable<Analitica> {
    return this.httpClient.get<Analitica>(this.endPoint + '/api/Analitica/?ResultadoID=1')
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }




  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
