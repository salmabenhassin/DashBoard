import { Component, OnInit } from '@angular/core';
import { faBoxes, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: false,

  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.css'
})
export class TopWidgetsComponent  implements OnInit {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor() { }

  ngOnInit(): void {
  }
}
