import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { Icon } from '../../shared';

@Component({
  selector: 'app-contact-section',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.html',
})
export class ContactSection {
  private readonly info = inject(SiteService).info;

  protected readonly sent = signal(false);
  protected readonly details = this.info.contact;

  protected submit(event: Event): void {
    event.preventDefault();
    (event.target as HTMLFormElement).reset();
    this.sent.set(true);
  }
}
