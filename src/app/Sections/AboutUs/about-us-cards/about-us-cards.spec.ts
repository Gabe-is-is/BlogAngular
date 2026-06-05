import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCards } from './about-us-cards';

describe('AboutUsCards', () => {
  let component: AboutUsCards;
  let fixture: ComponentFixture<AboutUsCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCards],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
