import {Student} from './student';

export class StudentList {
  students: Student[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  sort(): void {
    this.students.sort((a, b) => a.averageGrade - b.averageGrade);
  }
}
