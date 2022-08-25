import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
