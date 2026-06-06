import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BlogPost } from './pages/blog-post/blog-post';
import { Blog } from './pages/blog/blog';
import { AboutUs } from './pages/about-us/about-us';
import { Category } from './pages/category/category';
import { Contact } from './pages/contact/contact';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Author } from './pages/author/author';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blogpost',
    component: BlogPost,
  },
  {
    path: 'aboutus',
    component: AboutUs
  },
  {
    path: 'category',
    component: Category
  },
  {
    path: 'author',
    component: Author
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicy
  }
];
