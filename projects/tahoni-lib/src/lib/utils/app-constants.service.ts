import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConstantsService {
  constructor() {}

  get tahoniText(): string {
    return this._tahoniText;
  }

  private _tahoniText = 'tahoni';
}
