import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyMain } from './privacy-policy-main';

describe('PrivacyPolicyMain', () => {
  let component: PrivacyPolicyMain;
  let fixture: ComponentFixture<PrivacyPolicyMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyMain],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
