import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Processos } from './processos/processos';
import { Cards } from "./cards/cards";

@Component({
  imports: [RouterOutlet, Cards],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
}
