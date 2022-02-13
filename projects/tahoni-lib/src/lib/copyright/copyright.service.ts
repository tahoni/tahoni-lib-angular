import { Injectable, OnInit } from '@angular/core';
import { IconService } from '../utils/icon.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AppConstants } from '../shared/app-constants';

@Injectable({
  providedIn: 'root',
})
export class CopyrightService implements OnInit {
  private iconService: IconService;

  constructor(iconService: IconService) {
    this.iconService = iconService;
  }

  ngOnInit(): void {}

  get copyrightIcons(): IconDefinition[] {
    return this.iconService.tahoniIcons;
  }

  get copyrightSymbol(): IconDefinition {
    return this.iconService.copyrightIcon;
  }

  get copyrightText(): string {
    return AppConstants.tahoniText;
  }
}
