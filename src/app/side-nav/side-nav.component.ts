import { Component, OnInit } from '@angular/core';
import { faBox, faChartBar, faContactBook, faDashboard, faHand, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: false,
    templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

  constructor() { }
  ngOnInit(): void {
  }

}
