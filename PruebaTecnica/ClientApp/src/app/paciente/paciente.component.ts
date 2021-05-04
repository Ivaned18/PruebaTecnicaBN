import { Component, OnInit } from '@angular/core';
import { PacienteService } from "../paciente.service";
import * as $ from 'jquery';
import "bootstrap";
//const { jsPDF } = require("jspdf");


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})


export class PacienteComponent implements OnInit{
  pacientes: any = [];
  resultados: any = [];
  analiticas: any = [];

  resultado: any = [];

  constructor(public pacienteService: PacienteService) { }

  ngOnInit() {
    this.fetchPacientes()
    this.fetchResultados()

    $(document).ready(function () {

    });
  }


  VerModal(id) {
    this.fetchAnaliticas(id)
    this.fetchResultado(id)
    $('#ModalAnalitica').modal('show')
  }


  //Descargar(id) {
  //  this.fetchAnaliticas(id)
  //  this.fetchResultado(id)

  //  var Paciente = this.pacientes;

  //  var logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABQCAYAAAD/YAtfAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAEfhJREFUeJzt3Xl83HWdx/HXb+6ZZGaSSTJp7qtJUyhQji2KCLgccijiY3EtyMLKpYBsvXi4rsilrIooLCwshVKkUmhBPFhkFXUXUdwK6FZKgdg0dyfX5JrJzGSu32//mOTXmeZqMrkon+df7Zzf+X5/8/59r99E0TRNQwghAMNyF0AIsXJIIAghdBIIQgidBIIQQieBIITQSSAIIXQSCEIInQSCEEIngSCE0EkgCCF0EghCCJ0EghBCJ4EghNBJIAghdBIIQgidBIIQQieBIITQSSAIIXQSCEIInWm5CzAhrmnEVA2TomA1KMtdHCHek1ZED6EtGuPSNh+e197gg02t/E9gdLmLJMR70rIGwsTPPf9wMMD/BkM8XFeJHY2Nnb38YiiwnEUT4j1pRfQQepNJKixmLvK4+UFNBZVqku8GQgzEEyTlR+KFWDLKSvi7DC8MB7iqq5e/NZu4t7aCiKrii8VZn2MnoKp4TStmqkOII9qy9RDSU+j8PBffKMrn2YTGptZOiswmTsh1sMM/xPE9w7SORYkvf24JccRb8kCIqCpP+4doCo9l3H51cSEfMSnsDITZ1NpFIJHgdJeT200QVjX+EoosdVGFeM9Z0kDQgGAyyff8Q5zT1Mqb4QjJ8fvu7+7nRYycYDHxeCjKtfs7KDAb+XRxAVt6+jmnq49fDMtEoxCLackDIaJqWJJJBlSVz7T52BcZ44mBIb45FOA8Erx41Gq+Xeji5bjK1zq6CakaN5R4qY2N8TlfPy8HZUlSiMWyZJOKKtAXj/Ppli6a4gm+taqQO3r82BSFvkSSc50O7q4qxWk0YgDOens/L4WjXOJ08G+15QSTKpe3dhFOJHhtXcNSFHlFaRmL8udQGIBcg5Fz813LXCJxJFqS6fsk0BdPcPbeZgZtdn5SVcrJzhwqrGYu3t9FrtHA54oLsSkKSU3jsuZ2XtUULrBbeDoSxd7u456acq4syOMz+9tnfK8fDwxzS8eBKe9TgHyTiTPcTjaVeil4F61evDgc4Lr9HQDU2aw0n7humUsEe8NjfLJp/2E/3qoY+NP6tVPe1xOPc8aeJv3/d1WXc6EnL+syZksFLm1q4WcDw1xcmM+2hhqO5H20i/6NSPUMEny2rYugxcpD3jw25DrQgFOcuTxdW841nT3c0OHj3ytL2D4c5KfhKLcV5rGp1MtjfQPc1juIr6OHd8IRzsp3z/h+g4kEew+ZsDzU7wKjPNzTzy+PbuC4HPvCfdj3mIiqzlrX6azK9F+l3liCpkgUAIuicJrbmXX5FsLvAqPs9A8B8ET/INeVeDnFmbPMpVo8izqHoAI9sThn793H7oTKf1aX6Kk/cWh8wJXLtuoy+lQ4q6mNR3v8bC3z8oVSLxZF4VpvAdurS/GoSa5w5/JwTfmClK03nuBjbzczpspy5krgTyT0f5+f7ybPaFzG0hxUZjEzURKzolBqMS9reRbbovUQVKArGuOKli4GrDYeKvbQYLPRE09QbD74tgpwUo6dh8u9XNHuw20wsCHXgQEFBVAUhTNduZzpygUy9y8cjk2lXsotFiB1RtvWN0DzWOpM1B6Nsb1/gKuKC7P/wO9BFVYL363ODOg7On0EkyoAxzjsXO4t0O8zzdBD8McPBsKnvJ4FLun8rbZZeeHoel4YGuGjnjyqrZblLtKiWpRAmOgZ/GNrF12qxo8ri3m/M4cd/kG2m+xsyYEisymje3KG28kzteVc3XaAi5o72FZdxvpcx6TXnuv47bKiAk5Ke50riwupeu0Nfbnz5cDorIEwmlRxGA2L0p2KaRqBZBKPyTSv14+oKqNJlQLz3J4/mlSJaRr5JuO8x8TFZhNfLivOuO3uAz16IDTYrZPun876HDsP1FYSSCY5f5Zh4VQm6rHAZFrwMf45eS7OyTu8Sdz5lGMh2mKhLHggTEwgnrN3H4N2B89WFrEh18FQIsmZbheO0RAek00/eCOqilFRMCsKJ+Xm8GVvAVd39nJFSyc/b6ylzGJe0EoqsZixGwyMqqmDNjx+8O4JR7iuOTVh2WC3sXl1Fbd2+Hikx48/kcCmKOxsrOVCTx5be/1s7fUD0Oiws2V1VcZ7nLGnicT44s1dNRVTjjmf9g9xr6+XXcEQGmBTFC4syOP2ylIa7bZZP8fzgyPc0enj9dEwGuAwGLjQ4+a2ylLWTPP8mKZxn6+PzT39ei+p0GTiMq+Hfy4v4RPv7EfVNLxmMz9eWzd7ZS6QQ+vi9g7fYdWFBjzZP8j9vj5eHT1Yj+flu/mXipKME0FHNMalTS0AVNus3FVdzuaefnaPr9wc7bBzVXEhdTZrxnsciMX55DsHJ05/tLaOVebMYcNcyjFhpbbFggaCCvhiMa5p8xGx2thanM8xOXa+3tnNc6MRfrO6ko/kuTCMdx0TmsbGphZsjhzuKSnkrfAYd/YOcprdgmI0sm8sRnmWY7bRZJLhZKo/MKaq3NXVo4cBwFGO1AE3kkjySjAEwJ9DYYYTSX4yOKw/bkzTcBhSMdYRjemPnWoO4veBUb0HMpjWFYbU7z5c/tdWdoxPVKW//tP+IX42MMxTa2r5eMH0M+ztY1E++nZzxm1hVWWHf4ifDQ6zc00dH/VknmUDySQXvNXM7w+5tNyfSHCvr4+d/UN0x+NAaty8FLKpi6imcck7LRltNPHcnwwO89zgMN+vqeCfSr1Aqn4m2uyVYIid/YOkt8xzgyN8/0DvpPeLpD0PJrf3XMsBK7MtJixYL1gF+uMJznurmbcSSX5UWcIZbic3tx/gnnCMv3PlUGA2oaSNI42Kwo0lxTzvH+QTzR1cuq8Nr9XMU/XVPLu6klOdk5N1rj705l/J37Wb/F27KXn1De7x9en3mSBjjDshomoZDewxGbEoCuULMH78fEtnxhfAblCos1n1iauopnFJUwu7Z9iqPXEgK0Cl1ZIx0RVRUyHbFMmc/b+2uT3jALQpCmvsVj3kJg7ApZRNXdy4vyOjjXIMBmqtFr03mQR+GwjqwXyoxBS3RccDqmcOdTGfcqzEtpiwIIGgAq1jUS7b30nAZuehkiIaHVa+4+tjezjGTQ4LXy8rxqikJgpV7eDk4Fl5Tm4uLuTVUJgGVy4PlxdTaDbhNBoxzzAJtRC+VV0+qYs4wQR8o7IU/8nHMXDyekbffzwNh9GVn8kboQj/0dOv///SIg+9G9bTfOI63j5xHQ3jZYlqGl9p65rxtdbn2HnnhHW0n3QMB/7mWJ5sqNEPqLCqckdnt/7YP4fC+tIZwMc8eRzYcBzvnLCO4fet59aKkqw+13xkUxe7QxG2jA/ZAC70uPFtOJb9Jx1D74bj2FiYz93V5TzbWMd0axV1NivPH7WaPccfxVfLV+m3j6oqPzqkxzKd+ZRjJbZFuqwDQSM1Z3BVaxetqsqOMi+nu3L5aruP+0fCfLXAza0VJXoYdMXi3NjSQXs0hgL8diTIo8MBPujM5YnqMhod9tTqQrYFm0GZxcy2+uoZJ7y+XV3OzRUl+uYls6JkXVnb+wf0IKy1Wni8vhqnMfWq9TYr29fU6o/91XCA/vhU57GUH9TX0GA/GGaXFHm4s6pM//9zA8P6FaLpB/hqm5Uda2rxmIz657qtspSzlnjdP5u6eKLv4HNLLWaeXFOLa3yZsshs4qk1tXxplsnMh+oquSDfzTqHnX+tKuP4tP0oE2P62cynHCuxLdJlNYegAb2xOB9raqXXYmFbSSEn5ji480AvW8YSbMq1sqm4AGU8DACiqspvFSPPvtHEd6pK+WKPn6OsVrZWl1KV1tVaKI/VV+sTUwqQZzJSb7fN+uWeaiiRrT3hg13fnniC6tf3THqMQqpeNWBvOMIZUxwcXrNpyg1VG4vy+UJrJ5A603VGY9TarLydtnnoooI8bFP8ZuV5Hje/HgnO/UPNUzZ1kf7cC/Ld5BjmHtWNjsz6q7Ra+b/xocloUp3qKZPMpxwrsS3SZRUICvCgf5g2xcDjxR5Oc+Vya0c3j4TGuMWdwxdLijCkhQGkumqbi9xcHAxyddsB3ud28kjlqkUJA4B1DvuUs7yzsc/jIJtN+q8/hVWVcGzmA2+68e90e6lsh5Q5oU28jjbtY2Z7zcWSTV0k0i6/yTct3wam+ZRjJbZFuqxXGX44OMymgnw+nOdCI7Un/aa8XDatKtR7BkFVZTieoMJqQQWiqsZwOMKp+XnsrC2nyLywS4uLzZrWkEOJzG79QCIx7Rd5jd3Gi+OXcDuNhlnX26dbcvMnErRHY1QdMsn5q7TfoTQrCuXW1GRjjfXg0OLXwwHuqCydVN+vjYZYStnURb3dyn+Pn0FfHQ0vXiFnMZ9yrMS2SJdVILwZjjAUiXCuq0z/UJvrKoFUN2/itu/6+tgRGmNbWRFxDa7q6OZoTx4PVqx614UBkLEU2hKN8VjfAJ/2FhBSVW5qnX4ycGORh/u7U6scwaSa2ndxmBt3DnVtczvPNB4cs/4lFOHz48MFgA+5nfok40c8bu4bf99dwRBfaz/AN6vK9GHTTv8QzxzmRNpCyaYuLi7IZ3NPajLvpZEgW3r9XJ22uew+Xx82g4FrVy3uDtT5lGMltkW6eQeCpqUmE512B64puj4TgaABn/UW8KfWLv5+XweKorDWYePR6jJKF3jT0VI5N9+NTVEYG+8yXrmvjU0tHcRUjegMV5Of4szhkkIPT/kHAbiprYtnB4ZS40+jAV8szksjQc7Pd3N7ZemMZXhxOEDd629ysjOHQDLJH4MhYuPvbQC+njZbfXaei1OcOfxhfD39W1097Ogf5LgcBy1jUd4IL/2vUWVTF2fluTg7z8WvxnsY1zS380hPP40OO68HQ7wVGUMh1aW/vqRo0T7DfMqxEtsi3bwDQVFgldnM6FiEIXXy+C+cTGI3pLb7es0mri7M5x86umk0m3ioqvRdGwaQmkH+Xk0FN7R06LcFD3Mi6tH6KgYTCX45fhDtCobYFczsIr4dHuP6Em/GNR9T8ScS/HxoZNLt36ku59Txaz8mPLmmltP2NNERjQHQGo3ROv5vSK2fh6Zox8WUTV1sb6jhzDf/qk/svToazui2a6R6sIttPuVYiW0xIauZsyqrBavRxGP9qS6OBqiahi8W5/L+ER7p8RMHXgqM8hVfH++z29heW071Ik0gLqXrS4p4/qjVnOl2UmQy4TIaOMWZwxMNNXxghstj7QYDLxxdz+a6Kn2tPV211cItlSXkzTBJdYW3gLuqy/Xlqglr7TZ+urZuyq53ldXCH49r5FNFnkn7O0515fK7Y9cseZtkUxdFZhOvHNvIl0qLcRkzD+N6m5UfNtTw4PjwdTHNpxwrsS0mzOsXk1RgLKny4b37+ENSxaBpPFpRzOVFBaiaRkTT+ERTK7swcqXNxIP+Ida7nPy0tpwi88JffPJu1haN6WeKKqtl0kThTBKaxp5whOFEknKrhfppNlkdaiSZZG94jJiqUmezUrFCruCbb13ENI03wxFG5lgPC20+5VhpbTHnQNBIXap6XUc3v4kmuNOTy8uBEP81GuayfBcX5btwGY0MJZJc1dJJt6ZxusvJA+XFrHXYJAyEWMHmHAhJYOO+dl6JxthaXszZbheP9w1wTfsBrEkVe54bu9VKNBZDC4xwfYmX61cVUSw9AyFWvDkFggbs6B/kmoEgWwpdbCzM5+mBYa7rGWCDovFAXSUtkTH6E6nrwU/IsVNoNqGyQv5mnBBiRnNaZdA0jbgGlvFv9zP+Ib7U7ec0i5EHaiopMZupsVrQNC1ju7KEgRDvDocdCCpgUBR2j4YYGg1xSUIFs5kLTQZ+UFdFrtHIxISpsshXKQohFsdhBYJG6ix/V3c/WyMxrnfnckyOHQNwcWEJrhXw009CiOzNGggTOw6/0NrFY6MRbi5w8blVXiwGBQ4ZGggh3t1mDYS4qnJ3t5/7w1FuzLXpYWAAkKGBEEeUWQPhlq5etowE+Wa+ixtKirAapEcgxJFq1kAwaiqPlHr5eEFexhWMQogjz5L9sVchxMonWwSEEDoJBCGETgJBCKGTQBBC6CQQhBA6CQQhhE4CQQihk0AQQugkEIQQOgkEIYROAkEIoZNAEELoJBCEEDoJBCGETgJBCKGTQBBC6CQQhBA6CQQhhE4CQQihk0AQQugkEIQQuv8HPHwB+2ZELWQAAASAaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjEtMDUtMDM8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RXh0SWQ+YzU4NjZmMzQtM2Q2MS00MzY3LWE4M2QtMmU4ODRiZGQ0ODFiPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlBydWViYSBUZWNuaWNhPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkl2w6FuIEplc8O6cyBFc3TDqXZleiBEZSBMZcOzbjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PnRS1Y4AAAAASUVORK5CYII="

  //  const doc = new jsPDF();

  //  doc.addImage(logo, 'JPEG', 5, 2, 90, 30)

  //  doc.setFont(undefined, 'bold')
  //  doc.text(5, 35, "Paciente:");

  //  doc.setFont(undefined, 'normal')
  //  doc.text(31, 35, "Prueba");

  //  doc.save("Resultado ID#" + id + ".pdf"); 
  //}


  //Imprimir(id) {
  //  this.fetchAnaliticas(id)
  //  this.fetchResultado(id)

  //  var Paciente = this.pacientes;

  //  var logo = "data:image/png;base64,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ICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlBydWViYSBUZWNuaWNhPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkl2w6FuIEplc8O6cyBFc3TDqXZleiBEZSBMZcOzbjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PnRS1Y4AAAAASUVORK5CYII="

  //  const doc = new jsPDF();

  //  doc.addImage(logo, 'JPEG', 5, 2, 90, 30)

  //  doc.setFont(undefined, 'bold')
  //  doc.text(5, 35, "Paciente:");

  //  doc.setFont(undefined, 'normal')
  //  doc.text(31, 35, "Prueba");

  //  doc.save("Resultado ID#" + id + ".pdf");
  //}



  fetchPacientes() {
    return this.pacienteService.getPaciente().subscribe((data: {}) => {
      this.pacientes = data;
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
    })
  }


  fetchResultado(ResultadoID) {
    return this.pacienteService.getResultado(ResultadoID).subscribe((data: {}) => {
      this.resultado = data;

    })
  }

}
