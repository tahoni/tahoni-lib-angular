import { Component, OnInit } from '@angular/core';
import { CopyrightService } from './copyright.service';

@Component({
  selector: 'tahoni-lib-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent implements OnInit {
  private readonly _copyrightService: CopyrightService;

  constructor(copyrightService: CopyrightService) {
    this._copyrightService = copyrightService;
  }

  ngOnInit(): void {}

  get copyrightService(): CopyrightService {
    return this._copyrightService;
  }
}
