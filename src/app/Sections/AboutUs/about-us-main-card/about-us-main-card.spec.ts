import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMainCard } from './about-us-main-card';

describe('AboutUsMainCard', () => {
  let component: AboutUsMainCard;
  let fixture: ComponentFixture<AboutUsMainCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsMainCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsMainCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
