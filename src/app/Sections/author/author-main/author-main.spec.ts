import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorMain } from './author-main';

describe('AuthorMain', () => {
  let component: AuthorMain;
  let fixture: ComponentFixture<AuthorMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorMain],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
