import { Component, OnInit } from '@angular/core';
import { PacienteService } from "../paciente.service";


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})

export class PacienteComponent implements OnInit{
  pacientes: any = [];

  constructor(public pacienteService: PacienteService) { }

  ngOnInit() {
    this.fetchPacientes()
  }

  fetchPacientes() {
    return this.pacienteService.getPaciente().subscribe((data: {}) => {
      this.pacientes = data[0];
    })
  }  

}
