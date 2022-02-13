import { NgModule } from '@angular/core';
import { CopyrightComponent } from './copyright/copyright.component';
import { FocusOnErrorDirective } from './validation/focus-on-error.directive';
import { SummaryOnErrorDirective } from './validation/summary-on-error.directive';
import { TouchOnErrorDirective } from './validation/touch-on-error.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CopyrightComponent,
    FocusOnErrorDirective,
    SummaryOnErrorDirective,
    TouchOnErrorDirective,
  ],
  imports: [FontAwesomeModule],
  exports: [],
})
export class TahoniLibModule {}
