import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Album, AnnualReport } from '../models';

/** Media centre, source: https://dsd.ksu.edu.sa/ar/media-center */
@Injectable({ providedIn: 'root' })
export class MediaService {
  private readonly http = inject(HttpClient);

  readonly annualReports = toSignal(this.http.get<AnnualReport[]>('data/annual-reports.json'), {
    initialValue: [] as AnnualReport[],
  });

  readonly albums = signal<Album[]>([
    { title: 'الدورة التأسيسية الثامنة عشرة لأعضاء هيئة التدريس الجدد', date: '2024-10-07', photos: 0 },
    { title: 'دراسة احتياج الجهات لإعداد وتنفيذ الخطة الاستراتيجي', date: '2024-09-10', photos: 0 },
    { title: 'الحفل الختامي لدورة السياسات التجارية الاقليمية للدول الشرق أوسطية', date: '2024-10-13', photos: 0 },
    { title: 'حفل تكريم المتميزين لبرنامج التعاقب الأكاديمي والإداري', date: '2025-01-07', photos: 0 },
    { title: 'ورشة عمل الدليل الارشادي لإعداد الخطط التشغيلية للجهات', date: '2024-12-25', photos: 0 },
    { title: 'الاحتفاء بيوم اللغة العربية العالمي', date: '2024-12-19', photos: 0 },
    { title: 'الاسبوع التعريفي للطلاب السنة الأولى المشتركة', date: '2024-08-18', photos: 0 },
    { title: 'دورة الاسعافات الأولية', date: '2024-09-09', photos: 0 },
    { title: 'اللقاء السنوي لتكريم منسوبي العمادة', date: '2025-01-26', photos: 0 },
    { title: 'معسكر بناء تطبيقات الذكاء الاصطناعي بلغة بايسن (سدايا)', date: '2025-01-05', photos: 0 },
    { title: 'الاحتفاء باليوم الوطني السعودي 94', date: '2024-09-23', photos: 0 },
  ]).asReadonly();
}
