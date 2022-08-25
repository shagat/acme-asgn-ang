import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  uiServiceSub = new Subscription();
  sideNavCollapsed: boolean = false;
  constructor(private UiService: UiService) {}

  ngOnInit(): void {
    this.uiServiceSub = this.UiService.sideNavCollapsed.subscribe((res) => {
      this.sideNavCollapsed = res;
      console.log(this.sideNavCollapsed);
    });
  }
}
