import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  link =
    'https://www.hexnode.com/resources/video/?resourcepost=MTQ0NA==&datacount=1';
  constructor() {}

  ngOnInit(): void {}
}
