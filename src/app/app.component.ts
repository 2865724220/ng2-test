import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name: 'test01'},
  {id: 12, name: 'test02'},
  {id: 13, name: 'test03'},
  {id: 14, name: 'test04'},
  {id: 15, name: 'test05'},
  {id: 16, name: 'test06'},
  {id: 17, name: 'test07'},
  {id: 18, name: 'test08'},
  {id: 19, name: 'test09'},
  {id: 20, name: 'test010'}
];


