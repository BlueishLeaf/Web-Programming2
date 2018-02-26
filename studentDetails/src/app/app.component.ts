import { Component } from '@angular/core';
import { Detail } from './detail/detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  details: Detail[];
  constructor(){
    this.details = [
      new Detail("killian","12 Sliabh Mor Ballytivnan","S00170465","0857810122","Actually a god"),
      new Detail("killian","12 Sliabh Mor Ballytivnan","S00170465","0857810122","Actually a god"),
      new Detail("killian","12 Sliabh Mor Ballytivnan","S00170465","0857810122","Actually a god"),
    ]
  }
}
