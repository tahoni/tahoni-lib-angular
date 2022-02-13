import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConstantsService {
  private readonly _tahoniText = 'tahoni';

  constructor() {}

  get tahoniText(): string {
    return this._tahoniText;
  }
}
