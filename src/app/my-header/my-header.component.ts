import { Component, OnInit, Input } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-my-header",
  templateUrl: "./my-header.component.html",
  styleUrls: ["./my-header.component.scss"],
  standalone: true,
  imports: [IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})

export class MyHeaderComponent implements OnInit {
  @Input() name: string = 'Лабораторні роботи';
  constructor() {}
  ngOnInit() {}
}
