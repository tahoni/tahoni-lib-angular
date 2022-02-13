import { NgModule } from '@angular/core';
import { FocusOnErrorDirective } from './validation/focus-on-error.directive';
import { SummaryOnErrorDirective } from './validation/summary-on-error.directive';
import { TouchOnErrorDirective } from './validation/touch-on-error.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from './utils/icon.service';
import { SanitizeService } from './utils/sanitize.service';
import { ValidateService } from './validation/validate.service';
import { AlertService } from './message/alert.service';
import { CopyrightModule } from './copyright/copyright.module';

@NgModule({
  declarations: [
    FocusOnErrorDirective,
    SummaryOnErrorDirective,
    TouchOnErrorDirective,
  ],
  providers: [IconService, SanitizeService, ValidateService, AlertService],
  imports: [FontAwesomeModule, CopyrightModule],
  exports: [],
})
export class TahoniLibModule {}
