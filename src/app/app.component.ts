import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonItem, IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonList, IonItem],
})
export class AppComponent {
  constructor() {}
}
