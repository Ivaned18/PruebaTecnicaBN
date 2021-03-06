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


interface Resultado {
  id: number;
  pacienteID: string;
  doctor: string;
  centroMedico: string;
  fechaResultado: string;
}



interface Analitica {
  id: number;
  resultadoID: number;
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
    return this.httpClient.get<Paciente>(this.endPoint + '/api/Paciente/one/c6e69e82-77c6-54a0-bab2-6cb90ee8554c')
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  getResultados(): Observable<Resultados> {
    return this.httpClient.get<Resultados>(this.endPoint + '/api/Resultado/c6e69e82-77c6-54a0-bab2-6cb90ee8554c')
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  getResultado(ResultadoID): Observable<Resultado> {
    return this.httpClient.get<Resultado>(this.endPoint + '/api/Resultado/one/' + ResultadoID)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }



  getAnaliticas(ResultadoID): Observable<Analitica> {
    return this.httpClient.get<Analitica>(this.endPoint + '/api/Analitica/' + ResultadoID)
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
