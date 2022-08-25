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
  ];
  constructor() {}

  ngOnInit(): void {}
}
