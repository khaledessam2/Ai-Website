import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { PageHeader } from '../../shared';

@Component({
  selector: 'app-about',
  imports: [PageHeader, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class About {
  private readonly site = inject(SiteService);

  protected readonly pillars = this.site.aboutPillars.filter((p) => p.title !== 'سياسة الجودة');
  protected readonly policy = this.site.qualityPolicy;
  protected readonly objectives = this.site.objectives;
}
