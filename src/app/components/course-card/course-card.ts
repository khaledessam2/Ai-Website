import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COURSE_LEVEL_LABELS, Course, coursePricing } from '../../models';
import { ArabicDatePipe } from '../../shared';

const STARS = [1, 2, 3, 4, 5];

@Component({
  selector: 'app-course-card',
  imports: [ArabicDatePipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-card.html',
})
export class CourseCard {
  readonly course = input.required<Course>();

  protected readonly stars = STARS;
  protected readonly levelLabel = computed(() => COURSE_LEVEL_LABELS[this.course().courseLevel]);
  protected readonly pricing = computed(() => coursePricing(this.course()));
  protected readonly offerEndDate = computed(() => this.pricing().offerEnds?.slice(0, 10) ?? null);
  protected readonly rating = computed(() => this.course().avgRate ?? 0);
  protected readonly image = computed(() => this.course().imageUrl || 'images/course-placeholder.svg');
}
