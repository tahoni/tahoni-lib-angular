import { Injectable } from '@angular/core';
import * as sanitizeHtml from 'sanitize-html';

@Injectable({
  providedIn: 'root',
})
export class SanitizeService {
  constructor() {}

  cleanHtml(source: string): string {
    return sanitizeHtml(source, {
      allowedTags: [],
      allowedAttributes: {},
      disallowedTagsMode: 'discard',
    });
  }
}
