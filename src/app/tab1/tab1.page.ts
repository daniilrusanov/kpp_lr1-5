import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MyHeaderComponent} from "../my-header/my-header.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonicModule,
    MyHeaderComponent,
  ],
})

export class Tab1Page {
  d: number = 0;

  calculate(a1: any, b1: any, c1: any) {
    try {
      let a = parseFloat(a1);
      let b = parseFloat(b1);
      let c = parseFloat(c1);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('Parametr is not a number!')
      }

      a = a % 9 == 0 ? a : 0;
      b = b % 9 == 0 ? b : 0;
      c = c % 9 == 0 ? c : 0;

      this.d = (a + b + c) % 2 == 1 ? (a + b + c) : 0;
    } catch (e) {
      console.error(e);
    }
  }

  constructor() {}
}
