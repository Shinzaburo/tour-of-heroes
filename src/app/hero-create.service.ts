import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroCreateService {
  private heroSubject = new Subject<Hero>();

  hero = this.heroSubject.asObservable();

  constructor() {}

  /** ヒーローデータをSubjectを通して送信する（プレビュー画面に表示） */
  updateHeroPreview(hero: Hero): void {
    this.heroSubject.next(hero);
  }
}
