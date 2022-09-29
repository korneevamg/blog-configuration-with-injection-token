import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info-tag.service';

@Component({
  selector: 'shared-info-tag',
  templateUrl: './info-tag.component.html',
})
export class InfoTagComponent implements OnInit {
  public infoTag = '';
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoTag = this.infoService.getProductInfo();
  }
}
