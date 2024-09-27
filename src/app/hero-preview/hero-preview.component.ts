import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroCreateService } from '../hero-create.service';

@Component({
  selector: 'app-hero-preview',
  templateUrl: './hero-preview.component.html',
  styleUrl: './hero-preview.component.css',
})
export class HeroPreviewComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private heroCreateService: HeroCreateService) {}

  ngOnInit(): void {
    this.heroCreateService.hero.subscribe((hero) => {
      this.hero = hero;
    });
  }
}
