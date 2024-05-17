import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('exampleModal') model: ElementRef | undefined;
  studentObj: Student = new Student();
  studentList: Student[] = [];
  ngOnInit(): void {
    const localData = localStorage.getItem('angular17crud');
    if (localData != null) {
      this.studentList = JSON.parse(localData);
    }
  }

  openModel() {
    const model = document.getElementById('exampleModal');
    console.log(model, 'hi');

    if (model != null) {
      model.style.display = 'block';
    }
  }
  closeModel() {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }
  saveStudent() {
    const isLocalPresent = localStorage.getItem('angular17crud');
    if (isLocalPresent != null) {
      const oldData = JSON.parse(isLocalPresent);
      oldData.push(this.studentObj);
      localStorage.setItem('angular17crud', JSON.stringify(oldData));
    } else {
      const newArr = [];
      newArr.push(this.studentObj);
      localStorage.setItem('angular17crud', JSON.stringify(newArr));
    }
  }
}

export class Student {
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor() {
    this.address = '';
    this.city = '';
    this.email = '';
    this.name = '';
    this.mobileNo = '';
    this.state = '';
    this.pincode = '';
  }
}
