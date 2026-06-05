import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAuthors } from './about-us-authors';

describe('AboutUsAuthors', () => {
  let component: AboutUsAuthors;
  let fixture: ComponentFixture<AboutUsAuthors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsAuthors],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsAuthors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
