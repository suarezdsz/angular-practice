import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bases de Angular';
  numero: number = 0;
  base: number = 5;

  acum(acum: number){
    this.numero += acum;
  }
  sumar(){
    this.numero ++;
  }

  restar(){
    this.numero --;
  }
}
