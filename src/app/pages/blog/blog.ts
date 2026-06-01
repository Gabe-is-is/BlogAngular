import { Component } from '@angular/core';
import { Categories } from "../../Sections/Home/categories/categories";
import { Join } from "../../Sections/Home/join/join";
import { BlogPosting } from "../../Sections/blog/blog-posting/blog-posting";
import { BlogPosts } from "../../Sections/blog/blog-posts/blog-posts";

@Component({
  selector: 'app-blog',
  imports: [Categories, Join, BlogPosting, BlogPosts],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {}
