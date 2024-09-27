import { Component, OnInit } from '@angular/core';
import { HERO_CARD_WIDTH, MESSAGE_CONTAINER_WIDTH } from 'src/const';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    const space = window.innerWidth - MESSAGE_CONTAINER_WIDTH;
    const cardNum = space / HERO_CARD_WIDTH;
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, cardNum + 1)));
  }
}
