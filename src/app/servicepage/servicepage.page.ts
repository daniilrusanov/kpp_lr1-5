import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { MyHeaderComponent } from "../my-header/my-header.component";
import { TabService } from "./logger/tab/tab.service";
import { SeriesService } from "./logger/series/series.service";
import { RecursionService } from './logger/recursion/recursion.service';
import { LogService } from "./logger/log/log.service";

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [
    IonContent, CommonModule, FormsModule,
    MyHeaderComponent, IonCard, IonCardHeader, IonCardContent, IonItem, IonInput,
    IonButton, IonCardTitle, IonList, IonLabel
  ]
})

export class ServicepagePage  {
  xx: any[];
  yyTab: any[];
  xySeries: Map<any, any>;
  xyRecursion: Map<any, any>;

  yySer: any[];
  yyRec: any[];
  xyInput: any[];

  constructor(
    private tabService: TabService = new TabService(new LogService()),
    private seriesService: SeriesService = new SeriesService(new LogService()),
    private recursionService: RecursionService = new RecursionService(new LogService()),
  ) {
    this.xx = [];
    this.yyTab = [];
    this.xySeries = new Map();
    this.xyRecursion = new Map();

    this.yySer = [];
    this.yyRec = [];
    this.xyInput = [];
  }


  ras(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn);
    let xk1 = parseFloat(xk);
    let h1 = parseFloat(h);

    this.xx = [];
    this.yyTab = [];

    console.log('Табулювання');
    let obj = this.tabService.getTab(xn1, xk1, h1);
    this.xx = obj.x;
    this.yyTab = obj.y;

    console.log('Ряд');
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);

    console.log('Рекурсія');
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);

    this.input();
  }

  input() {
    this.yySer = [];
    this.yyRec = [];
    this.xyInput = [];

    this.xx.forEach((value, index) => {
      let s: string;
      let y: number;
      y = this.yyTab[index];
      s = y + ' ';

      y = this.xySeries.get(value);
      this.yySer.push(y);
      s = s + y + ' ';

      y = this.xyRecursion.get(value);
      this.yyRec.push(y);
      s = s + y;

      console.log(s);
      this.xyInput.push(s);
    });
  }
}
