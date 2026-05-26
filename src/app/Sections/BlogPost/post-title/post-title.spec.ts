import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTitle } from './post-title';

describe('PostTitle', () => {
  let component: PostTitle;
  let fixture: ComponentFixture<PostTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(PostTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
