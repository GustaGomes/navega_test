import { Component, OnInit } from '@angular/core';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'frontend-navega-test';

  constructor(private iconService: IconService) {}
  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
