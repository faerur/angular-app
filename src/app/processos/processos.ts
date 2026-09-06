import { Component, ElementRef, ViewChild } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

interface Task{
  name: string;
}

@Component({
  imports: [ɵEmptyOutletComponent],
  selector: 'app-processos',
  styleUrl: './processos.css',
  templateUrl: './processos.html',
})
export class Processos {
  tasks: Task[] = []
  nameLabel: string = "Processos:";
  @ViewChild("name") todoInputRef!: ElementRef<HTMLInputElement>;
  addTask(name:string){
    if(name){
      this.tasks.push({name});
    }
  }
  removeTask(){
    this.tasks.pop();
  }
}
