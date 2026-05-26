import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRelated } from './post-related';

describe('PostRelated', () => {
  let component: PostRelated;
  let fixture: ComponentFixture<PostRelated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostRelated],
    }).compileComponents();

    fixture = TestBed.createComponent(PostRelated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
