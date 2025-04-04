import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IStudent } from '../Models/student';
import { DisplayDataComponent } from "./display-data/display-data.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, DisplayDataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text = "სია"
  visible = false
  studentsArray : IStudent[] = []

  student : IStudent = {
    name: "",
    age: null,
    grade: "",
    subjects: "",
    address: {
        street: "",
        city: "",
        zip: null
    }
};


  save(form : NgForm){

    if(form.valid){
      this.studentsArray.push({...this.student,
        address: { ...this.student.address}})
    }
    console.log(this.student);
    
    form.resetForm()
  }

  showList(){
    this.visible = !this.visible
    this.text = this.text == "სია" ? "დახურეთ სია" : "სია";
  }

  deleteStudent(ind : number){
    this.studentsArray.splice(ind,1)
}

editStudent(ind: number){
    this.student = this.studentsArray[ind]
    this.studentsArray.splice(ind,1)
}

}
