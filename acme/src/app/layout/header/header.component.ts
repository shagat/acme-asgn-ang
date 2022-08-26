import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sideNavStateSub = new Subscription;
  sideNavState: boolean = false;
  users = [
    {
      name: 'Drew James',
      place: 'United States',
      number: '8715674877',
      img: '../../../assets/profile-pic-03.jpg',
    },
    {
      name: 'Kavid Ames',
      place: 'United States',
      number: '8715674877',
      img: '../../../assets/profile-pic-02.jpg',
    },
    {
      name: 'Lavid Kames',
      place: 'United States',
      number: '8715674877',
      img: '../../../assets/profile-pic-05.jpg',
    },
  ];
  constructor(private UiService: UiService) {}

  ngOnInit(): void {
    this.sideNavStateSub = this.UiService.sideNavCollapsed.subscribe((res) => {
      this.sideNavState = res;
      console.log(this.sideNavState);
    });
  }
  onClickedSideNav() {
    this.UiService.toggleSideNav();
  }
}
