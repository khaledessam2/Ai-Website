import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  protected readonly site = inject(SiteService);
  protected readonly menuOpen = signal(false);
  protected readonly loginUrl = environment.portalURl;

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
