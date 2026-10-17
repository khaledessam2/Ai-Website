import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from '../../models';
import { Icon, PageHeader, RequestForm } from '../../shared';

@Component({
  selector: 'app-join-us',
  imports: [Icon, PageHeader, RequestForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './join-us.html',
})
export class JoinUs {
  protected readonly fields: FormField[] = [
    { name: 'name', label: 'الاسم', required: true, placeholder: 'أدخل اسمك الكامل' },
    { name: 'email', label: 'البريد الإلكتروني', type: 'email', required: true, placeholder: 'name@example.com' },
    { name: 'phone', label: 'الهاتف المحمول', type: 'tel', required: true, placeholder: '05XXXXXXXX' },
    { name: 'specialty', label: 'مجال التدريب', required: true, placeholder: 'مثال: القيادة، التقنية، الجودة' },
    { name: 'experience', label: 'نبذة عن خبراتك التدريبية', type: 'textarea', placeholder: 'اذكر أبرز خبراتك وشهاداتك' },
  ];

  protected readonly documents = [
    { title: 'تقييم الحقيبة التدريبية', file: 'files/training-kit-evaluation.pdf' },
    { title: 'معايير اعتماد وتقييم المدربين المتعاونين', file: 'files/trainer-accreditation-criteria.pdf' },
  ];
}
