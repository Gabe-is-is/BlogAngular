import { Component } from '@angular/core';
import { Join } from "../../Sections/Home/join/join";
import { PostTitle } from "../../Sections/BlogPost/post-title/post-title";
import { PostImage } from "../../Sections/BlogPost/post-image/post-image";
import { PostRelated } from "../../Sections/BlogPost/post-related/post-related";

@Component({
  selector: 'app-blog-post',
  imports: [Join, PostTitle, PostImage, PostRelated],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {}
