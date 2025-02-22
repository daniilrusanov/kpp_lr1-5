import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from "../my-header/my-header.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    ExploreContainerComponent,
    MyHeaderComponent,
    IonicModule,
  ],
})

export class Tab1Page {
  constructor() {}
}
