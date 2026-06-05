import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainCard } from './cmain-card';

describe('CMainCard', () => {
  let component: CMainCard;
  let fixture: ComponentFixture<CMainCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CMainCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CMainCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
