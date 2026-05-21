import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Home } from './pages/home/home';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('blogAngular');

  public contador: number = 10;

  public increment = (): void => {
    this.contador = this.contador + 1;
  }
}
