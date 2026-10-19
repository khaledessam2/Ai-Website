import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '../../shared';

@Component({
  selector: 'app-structure',
  imports: [PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './structure.html',
})
export class Structure {
  protected readonly trail = [{ label: 'عن العمادة', route: '/about' }];
}
