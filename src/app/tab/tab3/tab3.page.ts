import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]
})
export class Tab3Page {
  matrix: number[][] = [];
  d: number = 0;

  isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  calculate(n1: any) {
    let n = parseInt(String(n1));
    if (isNaN(n) || n <= 0 || n > 100) {
      alert("Введіть коректний розмір матриці (1 ≤ N ≤ 100)!");
      return;
    }

    this.matrix = [];
    this.d = 0;

    for (let i = 0; i < n; i++) {
      let row: number[] = [];
      for (let j = 0; j < n; j++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        row.push(randomNumber);

        if (i === j && this.isPrime(randomNumber)) {
          this.d++;
        }
      }
      this.matrix.push(row);
    }
  }

  constructor() {}
}
