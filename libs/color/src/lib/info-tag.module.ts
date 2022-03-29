import { CommonModule } from '@angular/common';
import { InfoService } from './info-tag.service';
import { InfoTagComponent } from './info-tag/info-tag.component';
import { NgModule } from '@angular/core';
import { OrderWrapperComponent } from './order-wrapper/order-wrapper.component';

@NgModule({
  declarations: [OrderWrapperComponent, InfoTagComponent],
  imports: [CommonModule],
  providers: [InfoService],
  exports: [OrderWrapperComponent, InfoTagComponent],
})
export class InfoTagModule {}
