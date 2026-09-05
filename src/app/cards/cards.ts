import { Component } from '@angular/core';
import { Processos } from '../processos/processos';

@Component({
  imports: [Processos],
  selector: 'app-cards',
  styleUrl: './cards.css',
  templateUrl: './cards.html',
})
export class Cards {}
