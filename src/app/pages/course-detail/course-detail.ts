import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURSE_LEVEL_LABELS, coursePricing } from '../../models';
import { CoursesService } from '../../services/courses.service';
import { ArabicDatePipe, PageHeader } from '../../shared';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-course-detail',
  imports: [ArabicDatePipe, PageHeader, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-detail.html',
})
export class CourseDetail {
  private readonly courses = inject(CoursesService);

  /** Route param */
  readonly id = input.required<string>();

  protected readonly loading = this.courses.loading;
  protected readonly course = computed(() => this.courses.byId(this.id()));
  protected readonly pricing = computed(() => {
    const c = this.course();
    return c ? coursePricing(c) : null;
  });
  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly rating = computed(() => this.course()?.avgRate ?? 0);
  protected readonly offerEndDate = computed(() => this.pricing()?.offerEnds?.slice(0, 10) ?? null);
  protected readonly levelLabel = computed(() => {
    const c = this.course();
    return c ? COURSE_LEVEL_LABELS[c.courseLevel] : '';
  });
  protected readonly image = computed(() => this.course()?.imageUrl || 'images/course-placeholder.svg');

  protected readonly trail = [{ label: 'الدورات التدريبية', route: '/courses' }];
  /** Registration happens on the learning portal. */
  protected readonly registerUrl = environment.portalURl;
}
