import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info-tag.service';

const BASELINE_PRICE = 3.5;

@Component({
  selector: 'shared-info-tag',
  templateUrl: './info-tag.component.html',
})
export class InfoTagComponent implements OnInit {
  public infoTag = '';
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoTag = this.infoService.getProductInfo(BASELINE_PRICE);
  }
}
