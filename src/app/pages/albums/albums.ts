import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { ArabicDatePipe, PageHeader } from '../../shared';

@Component({
  selector: 'app-albums',
  imports: [ArabicDatePipe, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './albums.html',
})
export class Albums {
  protected readonly albums = inject(MediaService).albums;
  protected readonly trail = [{ label: 'المركز الإعلامي', route: '/news' }];
}
