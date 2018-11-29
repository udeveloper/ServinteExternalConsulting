import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'clinic-basic-information',
  templateUrl: './servinte-framework-ui-basic-information.component.html',
  styles: []
})
export class ServinteFrameworkUiBasicInformationComponent implements OnInit {

  patientInformation: any;

  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.getPatientInformation();
  }

  getPatientInformation() {
     this.httpclient.get('http://localhost:5000/api/basicinformation').subscribe(
          response => {
             this.patientInformation = response;
          },
          error =>{
            console.log(error);
          }
     );

  }


}
