import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registerIcons(): void {
    const icons: { name: string; path: string }[] = [
      { name: 'address-card', path: 'assets/icons/address-card.svg' },
      { name: 'homeSvg', path: 'assets/icons/homeSvg.svg' },
      {
        name: 'file-invoice-dollar',
        path: 'assets/icons/file-invoice-dollar.svg',
      },
      {
        name: 'envelope-open-dollar',
        path: 'assets/icons/envelope-open-dollar.svg',
      },
      { name: 'sack-dollar', path: 'assets/icons/sack-dollar.svg' },
      { name: 'file-alt', path: 'assets/icons/file-alt.svg' },
      { name: 'user-chart', path: 'assets/icons/user-chart.svg' },
      { name: 'comment-dollar', path: 'assets/icons/comment-dollar.svg' },
      { name: 'file-chart-line', path: 'assets/icons/file-chart-line.svg' },
      { name: 'info', path: 'assets/icons/info.svg' },
      { name: 'coins', path: 'assets/icons/coins.svg' },
      { name: 'eye', path: 'assets/icons/eye.svg' },
      { name: 'repeat-alt', path: 'assets/icons/repeat-alt.svg' },
    ];

    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
