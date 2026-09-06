import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { v4 as uuidv4} from 'uuid';

class Processo {
  constructor(
    public ds_complemento: string,
    public dt_fim: string,
    public dt_inicio: string,
    public id: string,
    public id_processo: number,
    public nr_processo: string,
    public nr_processo_origem: string,
  ) {}

  toString(): string {
    return `
      ID: ${this.id}
      ID Processo: ${this.id_processo}
      Número: ${this.nr_processo}
      Número de origem: ${this.nr_processo_origem}
      Complemento: ${this.ds_complemento}
      Data início: ${this.dt_inicio}
      Data fim: ${this.dt_fim}
    `;
  }
}

@Component({
  imports: [],
  selector: 'app-processos',
  styleUrl: './processos.css',
  templateUrl: './processos.html',
})
export class Processos {
  processos: Processo[] = [];

  constructor(private http: HttpClient) {}

  nameLabel: string = 'Processos:';
  @ViewChild('processo') todoInputRef!: ElementRef<HTMLInputElement>;

  ngOnInit(){
    this.loadProcessos();
  }
  addProcesso(processo: string) {
    this.processos.push({
      ds_complemento: processo,
      dt_fim: Date.now().toString(),
      dt_inicio: Date.now().toString(),
      id_processo: 239,
      id: '2912jd',
      nr_processo: '293i2',
      nr_processo_origem: 'j929',
    });
  }
  removeTask() {
    this.processos.pop();
  }

  loadProcessos() {
    this.http.get<Processo[]>('http://localhost:3000/processos').subscribe({
      next: (processos) => {
        this.processos = processos.map(
          (processo) =>
            new Processo(
              processo.ds_complemento,
              processo.dt_fim,
              processo.dt_inicio,
              processo.id,
              processo.id_processo,
              processo.nr_processo,
              processo.nr_processo_origem,
            ),
        );
      },
      error: (erro) => {
        console.error(erro);
      },
    });
  }
}
