import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../Models/student';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() student! : IStudent
  @Input() index! : number

  @Output() delSt = new EventEmitter<number>()
  @Output() editSt = new EventEmitter<number>()


  @Output() 
  deleteStudent(index : number){
    this.delSt.emit(index)
  }

  editStudent(index : number){
    this.editSt.emit(index)
  }
}
