import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  visible = false
  studentsArray : any[] = []

  save(){
    this.student.name = ""
    this.student.grade = ""
    this.student.subjects = ""
    this.student.address.street = ""
    this.student.address.city = ""
    this.student.address.zip = ""

    this.studentsArray.push({...this.student})
    console.log(this.studentsArray);
    console.log(this.student)
  }

  showList(){
    this.visible = !this.visible
  }


  student = {
    name: "",
    age: null,
    grade: "",
    subjects: "",
    isEnrolled: false,
    address: {
        street: "",
        city: "",
        zip: ""
    }
};


}
