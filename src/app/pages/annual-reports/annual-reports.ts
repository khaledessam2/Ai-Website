import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { PageHeader } from '../../shared';

@Component({
  selector: 'app-annual-reports',
  imports: [PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './annual-reports.html',
})
export class AnnualReports {
  protected readonly reports = inject(MediaService).annualReports;
  protected readonly trail = [{ label: 'المركز الإعلامي', route: '/news' }];
}
