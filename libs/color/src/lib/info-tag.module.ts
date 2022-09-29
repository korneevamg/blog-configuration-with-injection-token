import { CommonModule } from '@angular/common';
import { InfoService } from './info-tag.service';
import { InfoTagComponent } from './info-tag/info-tag.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [InfoTagComponent],
  imports: [CommonModule],
  providers: [InfoService],
  exports: [InfoTagComponent],
})
export class InfoTagModule {}
