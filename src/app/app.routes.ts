import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BlogPost } from './pages/blog-post/blog-post';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'blog',
    component: BlogPost,
  },
];
