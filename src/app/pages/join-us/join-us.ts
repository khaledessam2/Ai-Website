import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './join-us.html',
})
export class JoinUs {
  protected readonly benefits = [
    'مرجعية أكاديمية تضمن جودة المحتوى التدريبي واعتماده رسمياً.',
    'امتداد استراتيجي يفتح آفاق التعاون مع مؤسسات تدريبية محلية ودولية.',
    'بيئة تطوير مهنية مستمرة تسهم في صقل المهارات وتعزيز الخبرات.',
    'تعاقد احترافي مع المدربين المعتمدين لتقديم البرامج ضمن منظومة الجامعة.',
    'برامج تدريبية مدفوعة ومعتمدة تحت إشراف عمادة تطوير المهارات.',
  ];

  protected readonly documents = [
    { title: 'تقييم الحقيبة التدريبية', file: 'files/training-kit-evaluation.pdf' },
    { title: 'معايير اعتماد وتقييم المدربين المتعاونين', file: 'files/trainer-accreditation-criteria.pdf' },
  ];
}
