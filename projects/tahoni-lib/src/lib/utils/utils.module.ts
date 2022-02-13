import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from './icon.service';
import { SanitizeService } from './sanitize.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  providers: [IconService, SanitizeService],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class UtilsModule {}
