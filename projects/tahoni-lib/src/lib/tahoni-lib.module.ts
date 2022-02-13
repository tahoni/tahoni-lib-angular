import { NgModule } from '@angular/core';
import { FocusOnErrorDirective } from './validation/focus-on-error.directive';
import { SummaryOnErrorDirective } from './validation/summary-on-error.directive';
import { TouchOnErrorDirective } from './validation/touch-on-error.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from './utils/icon.service';
import { SanitizeService } from './utils/sanitize.service';
import { ValidateService } from './validation/validate.service';
import { AlertService } from './message/alert.service';
import { CopyrightComponent } from './copyright/copyright.component';
import { CopyrightService } from './copyright/copyright.service';

@NgModule({
  declarations: [
    CopyrightComponent,
    FocusOnErrorDirective,
    SummaryOnErrorDirective,
    TouchOnErrorDirective,
  ],
  providers: [
    CopyrightService,
    IconService,
    SanitizeService,
    ValidateService,
    AlertService,
  ],
  imports: [FontAwesomeModule],
  exports: [CopyrightComponent],
})
export class TahoniLibModule {}
