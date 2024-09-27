import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrl: './hero-create.component.css',
})
export class HeroCreateComponent {
  hero: Hero = { id: 0, name: '' };

  constructor(private heroService: HeroService) {}

  createHero() {
    this.heroService.updateHeroPreview(this.hero); // フォームの入力を即座にプレビューに反映
    this.heroService.addHero(this.hero).subscribe(); // サーバーにヒーローを登録
  }
}
