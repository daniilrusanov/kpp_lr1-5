import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader, IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Student} from './student';
import {Chart, registerables} from "chart.js";
import {StudentList} from "./studentList";
import {AlertController, LoadingController} from "@ionic/angular";
import {MyHeaderComponent} from "../my-header/my-header.component";


@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonCard, IonCardHeader, IonCardContent, IonList, IonCardTitle, IonItem, IonLabel]
})

export class CloudPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  students = new StudentList();
  dataUrl = 'https://api.jsonbin.io/v3/b/67c196ceacd3cb34a8f2795c';
  loading: any;
  lineChart: any;

  lineChartMethod(): void {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: this.students.students.map((data) => data.name),
        datasets: [
          {
            label: 'Найбільший середній бал',
            borderColor: 'rgba(75,192,192,1)',
            data: this.students.students.map((data) => data.averageGrade),
            backgroundColor: 'rgba(153,102,255,0.2)',
          }
        ]
      }
    });
  }

  constructor(
    public LoadingController: LoadingController,
    private alertController: AlertController
  ) {
    Chart.register(...registerables);
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['Ok']
    })
    await alert.present();
  }

  async load() {
    this.loading = await this.LoadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    })

    await this.loading.present();
    let data: any = [];

    fetch(this.dataUrl)
      .then(res => res.json())
      .then(json => {
        data = json;
        data = data.record;
        let i = 0;

        try {
          let i = 0;
          while (data[i] != undefined) {
            if (data[i].hasOwnProperty('group')) {
              this.students.addStudent(data[i] as Student);
            } else throw new Error('Error load file');
            i++;
          }
        } catch (e) {
          this.presentAlert('Помилка читання JSON');
          console.log((e as Error).message);
        }
        this.students.sort();
        this.lineChartMethod();
        this.loading.dismiss();
      });
  }

  ngOnInit() {
    this.load();
  }

  isCsStudent(student: Student) {
    return student.group == 'CS';
  }

  isDaStudent(student: Student) {
    return student.group == 'DA';
  }

}
