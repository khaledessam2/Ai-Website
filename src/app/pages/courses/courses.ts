import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AUDIENCE_LABELS, AudienceFilter } from '../../models';
import { CourseCard } from '../../components/course-card/course-card';
import { CoursesService } from '../../services/courses.service';
import { Icon, PageHeader, createPager } from '../../shared';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, Icon, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses.html',
})
export class Courses {
  private readonly coursesService = inject(CoursesService);

  protected readonly filters = (Object.keys(AUDIENCE_LABELS) as AudienceFilter[]).map((key) => ({
    key,
    label: AUDIENCE_LABELS[key],
  }));
  protected readonly selected = signal<AudienceFilter>('all');

  private readonly filtered = computed(() => this.coursesService.filterByAudience(this.selected()));
  protected readonly pager = createPager(this.filtered, 8);
  protected readonly total = computed(() => this.filtered().length);
  protected readonly pages = computed(() => Array.from({ length: this.pager.pageCount() }, (_, i) => i));

  protected select(filter: AudienceFilter): void {
    this.selected.set(filter);
    this.pager.reset();
  }
}
