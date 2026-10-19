import { Injectable, signal } from '@angular/core';
import { AudienceFilter, Course } from '../models';

// Source: https://dsd.ksu.edu.sa/ar/courses
const COURSES: Course[] = [
  { id: '4848', title: 'القيادة في الحوسبة السحابية', category: 'المهارات التقنية والتحول الرقمي', audience: 'students', audienceNote: 'طلاب', mode: 'remote', location: 'عن بعد', date: '2026-10-11', image: 'images/courses/course-1.webp' },
  { id: '4843', title: 'تقنيات التحسين المستمر (Lean Six Sigma)', category: 'الجودة والتميز المؤسسي', audience: 'faculty', audienceNote: 'أعضاء هيئة تدريس', mode: 'in-person', location: 'المدينة الجامعية للطلاب مبنى 26 قاعات عمادة تطوير المهارات', date: '2026-10-11', image: 'images/courses/course-2.webp' },
  { id: '4868', title: 'أساسيات التعلم والتطوير', category: 'التعليم والتعلم', audience: 'staff', audienceNote: 'موظفين', mode: 'in-person', location: 'المدينة الجامعية للطلاب مبنى 26 قاعات عمادة تطوير المهارات', date: '2026-10-11', image: 'images/courses/course-3.webp' },
];

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly _courses = signal<Course[]>(COURSES);

  readonly courses = this._courses.asReadonly();

  byId(id: string): Course | undefined {
    return COURSES.find((c) => c.id === id);
  }

  filterByAudience(audience: AudienceFilter): Course[] {
    const all = this._courses();
    return audience === 'all' ? all : all.filter((c) => c.audience === audience);
  }
}
