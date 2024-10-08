import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCreateComponent } from './hero-create.component';

describe('HeroCreateComponent', () => {
  let component: HeroCreateComponent;
  let fixture: ComponentFixture<HeroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
