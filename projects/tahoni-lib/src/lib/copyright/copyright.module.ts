import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright.component';
import { CopyrightService } from './copyright.service';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [CopyrightComponent],
  providers: [CopyrightService],
  imports: [CommonModule, UtilsModule],
  exports: [CopyrightComponent],
})
export class CopyrightModule {}
