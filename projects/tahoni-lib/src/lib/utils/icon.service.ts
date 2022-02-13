import { Injectable } from '@angular/core';
import { faCat, faCopyright, faMouse } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor() {}

  get tahoniIcons(): IconDefinition[] {
    return this._tahoniIcons;
  }

  private _tahoniIcons = [faCat, faMouse];

  get copyrightIcon(): IconDefinition {
    return this._copyrightIcon;
  }

  private _copyrightIcon = faCopyright;
}
