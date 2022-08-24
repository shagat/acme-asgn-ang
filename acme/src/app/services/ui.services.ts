import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiService {
  sideNavCollapsed = new Subject<boolean>();
  sideNavOpen = false;

  toggleSideNav() {
    console.log('sideNav clicked');
    this.sideNavOpen = !this.sideNavOpen;
    this.sideNavCollapsed.next(this.sideNavOpen);
  }
}
