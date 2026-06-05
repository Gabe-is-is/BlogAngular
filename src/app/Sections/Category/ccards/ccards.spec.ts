import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCards } from './ccards';

describe('CCards', () => {
  let component: CCards;
  let fixture: ComponentFixture<CCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCards],
    }).compileComponents();

    fixture = TestBed.createComponent(CCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
