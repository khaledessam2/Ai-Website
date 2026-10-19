import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-contact-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.html',
})
export class ContactSection {
  protected readonly details = inject(SiteService).info.contact;
}
