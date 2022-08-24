import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  uiServiceSub = new Subscription;
  sideNavState:boolean=false;
  constructor(private UiService: UiService) {}

  ngOnInit(): void {
    this.uiServiceSub = this.UiService.sideNavCollapsed.subscribe((res) => {
      this.sideNavState = res;
      console.log(this.sideNavState);
    })
  }
}
