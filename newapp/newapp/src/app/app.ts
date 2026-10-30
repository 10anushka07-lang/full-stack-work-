import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Addstudent } from './addstudent/addstudent'
import { Header } from './header/header'
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { Temp } from './temp/temp';
@Component({
  selector: 'app-root',
  imports: [Addstudent /*, Header, Footer, Temp */],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Student Manager';

  students = [
    { name: 'Aarav', grade: 85 },
    { name: 'Priya', grade: 42 },
    { name: 'Rohan', grade: 63 }
  ];

  get averageGrade(): number {
    if (this.students.length === 0) return 0;
    const total = this.students.reduce((sum, s) => sum + s.grade, 0);
    return Math.round(total / this.students.length);
  }

  onStudentAdded(newStudent: { name: string; grade: number }) {
    this.students.push(newStudent);
  }
}