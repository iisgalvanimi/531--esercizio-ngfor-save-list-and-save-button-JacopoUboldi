import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '531--esercizio-ngfor-save-list-and-save-button-jacopoUboldi';

  list: string[] = ['GgGgG', 'WeeEEEEE', 'jacopo', '18']
  parole:string="";

  constructor(){}

  onClick(){
    this.list.push(this.parole)
  }
}
