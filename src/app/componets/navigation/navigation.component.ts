import { Component } from '@angular/core';

import { slideInAnimation } from '../../route-animation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [ slideInAnimation ]
})
export class NavigationComponent { }
