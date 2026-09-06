import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Processos } from './processos/processos';

export const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'processos', component: Processos}
];
