import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InitiativesService } from '../../services/initiatives.service';
import { CarouselControls, Icon, SectionHeading, createPager } from '../../shared';

@Component({
  selector: 'app-initiatives-section',
  imports: [CarouselControls, Icon, RouterLink, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './initiatives-section.html',
})
export class InitiativesSection {
  private readonly initiatives = inject(InitiativesService).initiatives;

  protected readonly pager = createPager(this.initiatives, 3);
}
