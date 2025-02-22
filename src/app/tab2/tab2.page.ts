import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MyHeaderComponent} from "../my-header/my-header.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonicModule,
    MyHeaderComponent
  ]

})
export class Tab2Page {
  d: number = 0;

  calculate(a1: any, b1: any) {
    try {
      let a = parseInt(a1);
      let b = parseInt(b1);

      if (isNaN(a) || isNaN(b)) {
        throw new Error('Parametr is not a number!')
      }


      this.d = 0;
    } catch (e) {
      console.error(e);
    }
  }

  constructor() {}
}
