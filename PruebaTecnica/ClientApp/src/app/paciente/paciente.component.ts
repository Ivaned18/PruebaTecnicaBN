import { Component, OnInit } from '@angular/core';
import { PacienteService } from "../paciente.service";
import * as $ from 'jquery';
import "bootstrap";


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

    $(document).ready(function () {

    });
  }


  VerModal(id) {
    console.log(id);
    this.fetchAnaliticas(id)
    $('#ModalAnalitica').modal('show')
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

  fetchAnaliticas(ResultadoID) {
    return this.pacienteService.getAnaliticas(ResultadoID).subscribe((data: {}) => {
      this.analiticas = data;
      console.log(data);
    })
  }


}
