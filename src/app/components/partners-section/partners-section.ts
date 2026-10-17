import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { SectionHeading } from '../../shared';

@Component({
  selector: 'app-partners-section',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './partners-section.html',
})
export class PartnersSection {
  private readonly site = inject(SiteService);

  protected readonly partners = this.site.partners;
  protected readonly accreditations = this.site.accreditations;
}
