import { Component, OnInit } from '@angular/core';
import { PacienteService } from "../paciente.service";


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})

export class PacienteComponent implements OnInit{
  pacientes: any = [];
  resultados: any = [];
  analiticas: any = [];



  constructor(public pacienteService: PacienteService) { }

  ngOnInit() {
    this.fetchPacientes()
    this.fetchResultados()
    this.fetchAnaliticas()


  }

  fetchPacientes() {
    return this.pacienteService.getPaciente().subscribe((data: {}) => {
      this.pacientes = data[0];
    })
  }
  

  fetchResultados() {
    return this.pacienteService.getResultados().subscribe((data: {}) => {
      this.resultados = data;

    })
  }

  fetchAnaliticas() {
    return this.pacienteService.getAnaliticas().subscribe((data: {}) => {
      this.analiticas = data;
      console.log(data);
    })
  }


}
