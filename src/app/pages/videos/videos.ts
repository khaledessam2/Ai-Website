import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '../../shared';

@Component({
  selector: 'app-videos',
  imports: [PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './videos.html',
})
export class Videos {
  protected readonly trail = [{ label: 'المركز الإعلامي', route: '/news' }];
}
