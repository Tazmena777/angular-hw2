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
  text = "სია"
  // text1 = "დახურეთ სია"
  visible = false
  studentsArray : any[] = []

  save(){
    this.studentsArray.push({...this.student})
    console.log(this.studentsArray);
    console.log(this.student)

    this.student.name = ""
    this.student.grade = ""
    this.student.subjects = ""
    this.student.address.street = ""
    this.student.address.city = ""
    this.student.address.zip = ""
  }

  showList(){
    this.visible = !this.visible
    this.text = this.text == "სია" ? "დახურეთ სია" : "სია";
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
