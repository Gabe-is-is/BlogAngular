import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAll } from './contact-all';

describe('ContactAll', () => {
  let component: ContactAll;
  let fixture: ComponentFixture<ContactAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAll],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactAll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
