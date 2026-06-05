import { Component } from '@angular/core';
import { CMainCard } from "../../Sections/Category/cmain-card/cmain-card";
import { CCards } from "../../Sections/Category/ccards/ccards";

@Component({
  selector: 'app-category',
  imports: [CMainCard, CCards],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {}
