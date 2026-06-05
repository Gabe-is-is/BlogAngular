import { Component } from '@angular/core';
import { ContactAll } from "../../Sections/Contact/contact-all/contact-all";

@Component({
  selector: 'app-contact',
  imports: [ContactAll],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
