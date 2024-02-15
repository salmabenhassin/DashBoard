import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: false,
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.css'
})
export class SalesByMonthComponent  implements OnInit{

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    //cest les courbe qu'on donne ses valeurs qui forme ligne droite
    series: [
      {
        name: "Arizona",
        type:"line",
        color: '#044342',
        //ce sont les valeurs appartenant aux droite qui vont etre lié par type qui est ici bar !!!
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Connecticut',
        type: 'line',
        color: '#7e0505',
        //ce sont les valeurs appartenant aux droite qui vont etre lié par type qui est ici line!!! 
        data: [ 47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159 ]
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#ed9e20',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
    
})
      constructor() { }

      ngOnInit(): void {
      }
}
