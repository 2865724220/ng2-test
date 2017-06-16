/**
 * Created by Administrator on 2017/6/15 0015.
 */
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.detail.html',
  styleUrls: ['./app.detail.css']
})

export class HeroDetailComponent {
 @Input() hero: Hero;
}

export class Hero {
  id: number;
  name: string;
}
