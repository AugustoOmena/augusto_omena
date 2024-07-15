import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {

  }

  openBuiltcodeLink(): void {
    var companyLink = 'https://www.builtcode.com.br';
    window.open(companyLink, '_blank');
  }

  openParkcodeLink(): void {
    var companyLink = 'https://parquetecmar.angra.rj.gov.br';
    window.open(companyLink, '_blank');
  }

  openProjectLink(): void {
    var companyLink = 'https://github.com/AugustoOmena/FRONTEND_Clinica_Medica';
    window.open(companyLink, '_blank');
  }
}
