import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../models';
import { ArabicDatePipe, Icon } from '../../shared';

@Component({
  selector: 'app-course-card',
  imports: [ArabicDatePipe, Icon, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-card.html',
})
export class CourseCard {
  readonly course = input.required<Course>();
}
