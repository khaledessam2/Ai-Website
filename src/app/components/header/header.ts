import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { Icon } from '../../shared';
@Component({
  selector: 'app-header',
  imports: [Icon, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  protected readonly site = inject(SiteService);
  protected readonly menuOpen = signal(false);
  protected readonly loginUrl = 'https://portal.dev.leanacademy.me/login';

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
