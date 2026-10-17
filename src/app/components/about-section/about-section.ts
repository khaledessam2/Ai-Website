import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteService } from '../../services/site.service';
import { Icon, SectionHeading } from '../../shared';

@Component({
  selector: 'app-about-section',
  imports: [Icon, RouterLink, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
})
export class AboutSection {
  private readonly site = inject(SiteService);

  protected readonly pillars = this.site.aboutPillars;
  protected readonly objectives = this.site.objectives;
}
