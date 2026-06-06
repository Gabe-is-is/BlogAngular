import { Component } from '@angular/core';
import { AuthorMain } from "../../Sections/author/author-main/author-main";

@Component({
  selector: 'app-author',
  templateUrl: './author.html',
  styleUrl: './author.scss',
  imports: [AuthorMain],
})
export class Author {}
