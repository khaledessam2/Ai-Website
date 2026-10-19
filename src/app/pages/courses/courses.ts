import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { CoursesService } from '../../services/courses.service';
import { PageHeader, createPager } from '../../shared';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses.html',
})
export class Courses {
  protected readonly coursesService = inject(CoursesService);

  protected readonly filters = computed(() => [{ id: 'all', name: 'الكل' }, ...this.coursesService.categories()]);
  protected readonly selected = signal('all');

  private readonly filtered = computed(() => this.coursesService.filterByCategory(this.selected()));
  protected readonly pager = createPager(this.filtered, 8);
  protected readonly total = computed(() => this.filtered().length);
  protected readonly pages = computed(() => Array.from({ length: this.pager.pageCount() }, (_, i) => i));

  protected select(id: string): void {
    this.selected.set(id);
    this.pager.reset();
  }
}
