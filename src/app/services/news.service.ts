import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewsItem } from '../models';

const THUMB = 'images/news-thumb.png';

/** Source: https://dsd.ksu.edu.sa/ar (آخر الأخبار) */
const NEWS: NewsItem[] = [
  {
    id: '146153',
    title: 'تكامل مؤسسي بين تطوير المهارات و الموارد البشرية لإطلاق (المسار المهني)',
    excerpt: 'أطلقت عمادة تطوير المهارات بالشراكة مع عمادة الموارد البشرية المرحلة الأولى من مشروع "المسار…',
    date: '2026-05-03',
    image: THUMB,
  },
  {
    id: '146140',
    title: 'تعلن عمادة تطوير المهارات إطلاق حزمة تدريبية استثنائية تستهدف المعيدين والمحاضرين',
    excerpt: 'في إطار جهودها المستمرة للارتقاء بجودة التعليم الجامعي، تعلن عمادة تطوير المهارات عن إطلاق حزمة…',
    date: '2026-04-28',
    image: THUMB,
  },
  {
    id: '146111',
    title: 'عمادة تطوير المهارات تُقيم ورشة عمل بعنوان "تقييم وتطوير برنامج أعضاء هيئة التدريس الجدد"',
    excerpt: 'في خطوة تعكس التزامها المستمر بالتميّز التعليمي وتعزيز جودة المخرجات الأكاديمية، تستعد عمادة تطوير…',
    date: '2026-04-20',
    image: THUMB,
  },
  {
    id: '145803',
    title: 'عمادة تطوير المهارات بجامعة الملك سعود تنظم ورشة عمل بالتعاون مع لينكدإن',
    excerpt: 'عقدت عمادة تطوير المهارات بجامعة الملك سعود، بالتعاون مع منصة لينكدإن، ورشة عمل بعنوان: «من الجامعة…',
    date: '2025-12-28',
    image: THUMB,
  },
];

@Injectable({ providedIn: 'root' })
export class NewsService {
  private readonly http = inject(HttpClient);

  readonly news = signal<NewsItem[]>(NEWS).asReadonly();

  /** Article bodies (paragraphs) keyed by news id. */
  readonly bodies = toSignal(this.http.get<Record<string, string[]>>('data/news-bodies.json'), {
    initialValue: {} as Record<string, string[]>,
  });

  byId(id: string): NewsItem | undefined {
    return NEWS.find((n) => n.id === id);
  }
}
