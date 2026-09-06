import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Processos } from './processos/processos';
import { Cards } from "./cards/cards";
import { Home } from "./components/pages/home/home";
import { Nav } from './components/nav/nav';

@Component({
  imports: [RouterOutlet, Cards, Home, Nav],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
}
