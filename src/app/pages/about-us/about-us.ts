import { Component } from '@angular/core';
import { Authors } from "../../Sections/Home/authors/authors";
import { Join } from "../../Sections/Home/join/join";
import { AboutUsMainCard } from "../../Sections/AboutUs/about-us-main-card/about-us-main-card";
import { AboutUsCards } from "../../Sections/AboutUs/about-us-cards/about-us-cards";
import { AboutUsCreatives } from "../../Sections/AboutUs/about-us-creatives/about-us-creatives";
import { AboutUsAuthors } from "../../Sections/AboutUs/about-us-authors/about-us-authors";

@Component({
  selector: 'app-about-us',
  imports: [Authors, Join, AboutUsMainCard, AboutUsCards, AboutUsCreatives, AboutUsAuthors],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {}
