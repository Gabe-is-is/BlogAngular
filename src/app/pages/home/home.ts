import { Component } from '@angular/core';
import { Slider } from '../../Sections/Home/slider/slider';
import { Posts } from '../../Sections/Home/posts/posts';
import { About } from '../../Sections/Home/about/about';
import { Categories } from '../../Sections/Home/categories/categories';
import { Reason } from '../../Sections/Home/reason/reason';
import { Authors } from '../../Sections/Home/authors/authors';
import { Partners } from '../../Sections/Home/partners/partners';
import { Testimonials } from '../../Sections/Home/testimonials/testimonials';
import { Join } from '../../Sections/Home/join/join';

@Component({
  selector: 'app-home',
  imports: [Slider, Posts, About, Categories, Reason, Authors, Partners, Testimonials, Join ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
