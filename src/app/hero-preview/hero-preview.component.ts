import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-preview',
  templateUrl: './hero-preview.component.html',
})
export class HeroPreviewComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.hero.subscribe((hero) => {
      this.hero = hero; // 受け取ったヒーロー情報を表示
    });
  }
}
