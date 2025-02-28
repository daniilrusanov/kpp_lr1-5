export class Student {
  name: string;
  group: string;
  averageGrade: number;
  scholarship: number;

  constructor(name: string, group: string, averageGrade: number, scholarship: number) {
    this.name = name;
    this.group = group;
    this.averageGrade = averageGrade;
    this.scholarship = scholarship;
  }
}
