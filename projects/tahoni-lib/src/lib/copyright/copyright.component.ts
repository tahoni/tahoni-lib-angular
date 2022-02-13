import { Component } from '@angular/core';
import { CopyrightService } from './copyright.service';

@Component({
  selector: 'lib-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent {
  copyrightService: CopyrightService;

  constructor(copyrightService: CopyrightService) {
    this.copyrightService = copyrightService;
  }
}
