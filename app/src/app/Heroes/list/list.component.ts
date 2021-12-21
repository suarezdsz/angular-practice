import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: string[] = ['Super Man', 'Batman', 'Iron Man', 'Capitan America']
  hero_delete : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(){
 
    this.hero_delete.push(this.heroes[0].toString());
    this.heroes.shift();
  }

}
