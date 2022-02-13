import { Injectable, OnInit } from '@angular/core';
import { IconService } from '../utils/icon.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AppConstantsService } from '../utils/app-constants.service';

@Injectable({
  providedIn: 'root',
})
export class CopyrightService implements OnInit {
  private appConstants: AppConstantsService;
  private iconService: IconService;

  constructor(appConstants: AppConstantsService, iconService: IconService) {
    this.appConstants = appConstants;
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
    return this.appConstants.tahoniText;
  }
}
