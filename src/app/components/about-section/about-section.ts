import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { SectionHeading } from '../../shared';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
})
export class AboutSection {
  private readonly site = inject(SiteService);

  protected readonly pillars = this.site.aboutPillars;
}
