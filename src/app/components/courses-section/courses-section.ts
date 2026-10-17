import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AUDIENCE_LABELS, AudienceFilter } from '../../models';
import { CoursesService } from '../../services/courses.service';
import { CarouselControls, Icon, SectionHeading, createPager } from '../../shared';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-courses-section',
  imports: [CarouselControls, CourseCard, Icon, RouterLink, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-section.html',
})
export class CoursesSection {
  private readonly coursesService = inject(CoursesService);

  protected readonly filters = (Object.keys(AUDIENCE_LABELS) as AudienceFilter[]).map((key) => ({
    key,
    label: AUDIENCE_LABELS[key],
  }));
  protected readonly selected = signal<AudienceFilter>('all');

  private readonly filtered = computed(() => this.coursesService.filterByAudience(this.selected()));
  protected readonly pager = createPager(this.filtered, 4);

  protected select(filter: AudienceFilter): void {
    this.selected.set(filter);
    this.pager.reset();
  }
}
