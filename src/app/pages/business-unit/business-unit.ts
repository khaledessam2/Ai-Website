import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormField } from '../../models';
import { FaqService } from '../../services/faq.service';
import { Accordion, Icon, PageHeader, RequestForm } from '../../shared';

@Component({
  selector: 'app-business-unit',
  imports: [Accordion, Icon, PageHeader, RequestForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './business-unit.html',
})
export class BusinessUnit {
  protected readonly faq = inject(FaqService).groupByTitle('وحدة الأعمال');

  protected readonly fields: FormField[] = [
    { name: 'organization', label: 'اسم الجهة', required: true, placeholder: 'أدخل اسم جهتك' },
    { name: 'name', label: 'اسم المسؤول', required: true, placeholder: 'أدخل الاسم' },
    { name: 'email', label: 'البريد الإلكتروني', type: 'email', required: true, placeholder: 'name@example.com' },
    { name: 'phone', label: 'الهاتف', type: 'tel', required: true, placeholder: '05XXXXXXXX' },
    { name: 'needs', label: 'احتياجكم التدريبي', type: 'textarea', placeholder: 'صف البرنامج المطلوب وعدد المتدربين' },
  ];
}
