import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon, PageHeader } from '../../shared';

@Component({
  selector: 'app-structure',
  imports: [Icon, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './structure.html',
})
export class Structure {
  protected readonly trail = [{ label: 'عن العمادة', route: '/about' }];
}
