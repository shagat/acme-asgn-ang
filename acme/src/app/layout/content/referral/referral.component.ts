import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css'],
})
export class ReferralComponent implements OnInit {
  data = [
    {
      location: 'google.com',
      views: 3746,
      sales: 752,
      conversion: 43,
      total: 19291,
    },
    {
      location: 'facebook.com',
      views: 8246,
      sales: 642,
      conversion: 63,
      total: 15291,
    },
    {
      location: 'twitter.com',
      views: 8846,
      sales: 652,
      conversion: 23,
      total: 19291,
    },
    {
      location: 'Direct, email, IM',
      views: 1146,
      sales: 642,
      conversion: 26,
      total: 13291,
    },
    {
      location: 'linkdin.com',
      views: 2746,
      sales: 552,
      conversion: 20,
      total: 12291,
    },
    {
      location: 'instagram.com',
      views: 2746,
      sales: 552,
      conversion: 23,
      total: 12291,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
