import { Component } from '@angular/core';
import { MatDialog } from'@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularpro';


  constructor(private _dialog: MatDialog) {}
OpenAddEditEmpForm(){
  this._dialog.open(EmpAddEditComponent, {
    width: '40%',
    height: '60%'
  });
}
}
