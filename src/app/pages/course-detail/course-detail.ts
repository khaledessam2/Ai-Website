import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormField } from '../../models';
import { CourseCard } from '../../components/course-card/course-card';
import { CoursesService } from '../../services/courses.service';
import { ArabicDatePipe, Icon, PageHeader, RequestForm } from '../../shared';

@Component({
  selector: 'app-course-detail',
  imports: [ArabicDatePipe, CourseCard, Icon, PageHeader, RequestForm, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-detail.html',
})
export class CourseDetail {
  private readonly courses = inject(CoursesService);

  /** Route param */
  readonly id = input.required<string>();

  protected readonly course = computed(() => this.courses.byId(this.id()));
  protected readonly related = computed(() => {
    const current = this.course();
    return current
      ? this.courses
          .courses()
          .filter((c) => c.category === current.category && c.id !== current.id)
          .slice(0, 4)
      : [];
  });

  protected readonly trail = [{ label: 'الدورات التدريبية', route: '/courses' }];
  protected readonly fields: FormField[] = [
    { name: 'name', label: 'الاسم', required: true, placeholder: 'أدخل اسمك' },
    { name: 'email', label: 'البريد الإلكتروني', type: 'email', required: true, placeholder: 'name@ksu.edu.sa' },
    { name: 'phone', label: 'الهاتف المحمول', type: 'tel', required: true, placeholder: '05XXXXXXXX' },
    { name: 'organization', label: 'الجهة / الكلية', placeholder: 'أدخل جهتك أو كليتك' },
  ];
}
