import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-preview',
  templateUrl: './hero-preview.component.html',
})
export class HeroPreviewComponent implements OnInit {
  hero: Hero | undefined;

  showFlg = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.hero.subscribe((hero) => {
      this.hero = hero;
      this.showFlg = this.hero !== undefined && this.hero.name !== '';
    });
  }
}
