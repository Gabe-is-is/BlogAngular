import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImage } from './post-image';

describe('PostImage', () => {
  let component: PostImage;
  let fixture: ComponentFixture<PostImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostImage],
    }).compileComponents();

    fixture = TestBed.createComponent(PostImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
