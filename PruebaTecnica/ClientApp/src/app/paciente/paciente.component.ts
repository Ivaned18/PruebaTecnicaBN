import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})


export class PacienteComponent {
  public pacientes: Paciente[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Paciente[]>(baseUrl + 'api/Paciente/?PacienteID=c6e69e82-77c6-44a0-bab1-6cb90ee8554c').subscribe(result => {
      this.pacientes = result[0];
      console.log(result);
    }, error => console.error(error));
  }
}

interface Paciente {
  is: string;
  pacienteID: string;
  nombre: string;
  apellido: string;
  telefono: string;
  sexo: string;
  fechaNacimiento: string;

}