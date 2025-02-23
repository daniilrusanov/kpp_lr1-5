import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]
})
export class Tab2Page {
  d: number = 0;
  c: number[] = [];

  calculate(a1: any, b1: any) {
    this.c = [];
    this.d = 0;
    try {
      let a = parseInt(a1);
      let b = parseInt(b1);

      if (isNaN(a) || isNaN(b)) {
        throw new Error('Parameter is not a number!')
      }

      for (let num = a; num <= b; num++) {
        if (num % 11 === 0) {
          let firstDigit = parseInt(num.toString()[0]);
          if (firstDigit % 2 === 0) {
            this.c.push(num);
            this.d += 1;
          }
        }
      }

    } catch (e) {
      console.error(e);
    }
  }

  constructor() {}
}
