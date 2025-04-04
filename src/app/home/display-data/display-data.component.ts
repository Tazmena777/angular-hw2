import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../Models/student';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-display-data',
  imports: [CommonModule, CardComponent],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent {
  @Input() studentData : IStudent[]=[]
  @Input() isVisible  : boolean = false

  @Output() deleteSt = new EventEmitter<number>()
  @Output() editSt = new EventEmitter<number>()

  delete(ind : number){
    this.deleteSt.emit(ind)
  }
  
  edit(ind : number){
    this.editSt.emit(ind)
  }
  
}

