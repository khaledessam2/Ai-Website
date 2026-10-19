import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CarouselControls, SectionHeading, createPager } from '../../shared';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-courses-section',
  imports: [CarouselControls, CourseCard, RouterLink, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-section.html',
})
export class CoursesSection {
  protected readonly coursesService = inject(CoursesService);

  protected readonly filters = computed(() => [{ id: 'all', name: 'الكل' }, ...this.coursesService.categories()]);
  protected readonly selected = signal('all');

  private readonly filtered = computed(() => this.coursesService.filterByCategory(this.selected()));
  protected readonly pager = createPager(this.filtered, 4);

  protected select(id: string): void {
    this.selected.set(id);
    this.pager.reset();
  }
}
