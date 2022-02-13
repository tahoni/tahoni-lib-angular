import { Injectable } from '@angular/core';
import { faCat, faCopyright, faMouse } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private _tahoniIcons = [faCat, faMouse];
  private _copyrightIcon = faCopyright;

  constructor() {}

  get tahoniIcons(): IconDefinition[] {
    return this._tahoniIcons;
  }

  get copyrightIcon(): IconDefinition {
    return this._copyrightIcon;
  }
}
