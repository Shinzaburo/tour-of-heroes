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

  onInputChange() {
    this.heroService.updateHeroPreview(this.hero);
  }

  createHero() {
    this.heroService.getHeroes().subscribe((heroes) => {
      const idList = heroes.map((hero) => hero.id);
      this.hero.id = this.findNewId(idList);
      this.heroService.addHero(this.hero).subscribe();
      this.heroService.updateHeroPreview(this.hero);
    });
  }

  private findNewId(idList: number[]): number {
    for (let id = 0; id <= idList.length; id++) {
      if (!idList.includes(id)) {
        return id;
      }
    }
    return idList.length;
  }
}
