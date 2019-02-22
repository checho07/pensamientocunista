import { Component } from '@angular/core';
import { ExcelServiceService } from './excel-service-.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pensamientoFront';

  constructor(private excelservice:ExcelServiceService){
    
  }

  test(){
    let json = [{id:123,nombre:'sergio',fecha:456 },{id:1234,nombre:'andres',fecha:456 },{id:1235,nombre:'cesar',fecha:456 }]
    this.excelservice.exportAsExcelFile(json,'prueba')
  }
}
