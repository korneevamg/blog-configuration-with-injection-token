import { CommonModule } from '@angular/common';
import { InfoService } from './info-tag.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  providers: [InfoService],
})
export class InfoTagModule {}
