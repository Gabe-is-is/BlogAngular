import { Component } from '@angular/core';
import { PrivacyPolicyMain } from "../../Sections/PrivacyPolicy/privacy-policy-main/privacy-policy-main";

@Component({
  selector: 'app-privacy-policy',
  imports: [PrivacyPolicyMain],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {}
