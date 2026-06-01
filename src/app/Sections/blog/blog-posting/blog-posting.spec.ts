import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPosting } from './blog-posting';

describe('BlogPosting', () => {
  let component: BlogPosting;
  let fixture: ComponentFixture<BlogPosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPosting],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPosting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
