import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

interface Paciente {
  id: string;
  pacienteID: string;
  nombre: string;
  apellido: string;
  telefono: string;
  sexo: string;
  fechaNacimiento: string;
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
