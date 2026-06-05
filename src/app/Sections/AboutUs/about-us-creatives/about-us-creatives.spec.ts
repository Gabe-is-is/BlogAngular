import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCreatives } from './about-us-creatives';

describe('AboutUsCreatives', () => {
  let component: AboutUsCreatives;
  let fixture: ComponentFixture<AboutUsCreatives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCreatives],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsCreatives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
