import { Component, OnInit } from '@angular/core';
import { CopyrightService } from './copyright.service';

@Component({
  selector: 'tahoni-lib-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent implements OnInit {
  copyrightService: CopyrightService;

  constructor(copyrightService: CopyrightService) {
    this.copyrightService = copyrightService;
  }

  ngOnInit(): void {}
}
