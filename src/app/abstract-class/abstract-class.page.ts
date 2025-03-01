import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem
} from '@ionic/angular/standalone';
import {SportsEquipment} from "./abstract/SportsEquipment";
import {EquipmentFactory} from "./abstract/EquipmentFactory";
import {MyHeaderComponent} from "../my-header/my-header.component";

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, MyHeaderComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem]
})
export class AbstractClassPage implements OnInit {
  equipment: SportsEquipment[] = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/67c1fbf0e41b4d34e49e72a0';
  constructor() {}

  ngOnInit(): void {
    this.load();
  }

  async load() {
    let data: any[] = [];
    this.equipment = [];
    try {
      const response = await fetch(this.dataUrl);
      const json = await response.json();
      data = json.record.record;

      data.forEach((item: any) => {
        let f = EquipmentFactory.getEquipment(item);
        this.equipment.push(f);
      });

    } catch (error) {
      console.error("Помилка завантаження JSON:", error);
    }
  }

  getAverageWeight(): number {
    let sum = 0;
    let count = 0;
    for(const e of this.equipment) {
      sum += e.getWeight();  // Ensure `getWeight()` is a valid method
      count += 1;
    }
    if(count >= 1) {
      return sum / count;
    } else {
      return 0;  // Return 0 if no equipment is available
    }
  }

  getColor(weight: number): string {
    let averageWeight = this.getAverageWeight();

    if (weight > averageWeight) {
      return 'rgb(0, 128, 0)';
    } else if (weight < averageWeight) {
      return 'rgb(255, 0, 0)';
    } else {
      return 'rgb(0, 0, 255)';
    }
  }



}
