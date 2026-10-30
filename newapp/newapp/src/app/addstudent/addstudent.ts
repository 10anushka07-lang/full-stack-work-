import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-addstudent',
  styleUrl: './addstudent.css',
  templateUrl: './addstudent.html',
})
export class Addstudent {
  newName = '';
  newGrade: number | null = null;

  @Output() studentAdded = new EventEmitter<{ name: string; grade: number }>();

  submit() {
    if (this.newName.trim() && this.newGrade !== null) {
      alert(`Added ${this.newName} with grade ${this.newGrade}!`);
      this.studentAdded.emit({ name: this.newName, grade: this.newGrade });
      this.newName = '';
      this.newGrade = null;
    }
  }
}