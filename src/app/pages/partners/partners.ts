import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from '../../models';
import { PartnersSection } from '../../components/partners-section/partners-section';
import { PageHeader, RequestForm } from '../../shared';

@Component({
  selector: 'app-partners',
  imports: [PageHeader, PartnersSection, RequestForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './partners.html',
})
export class Partners {
  protected readonly requirements = [
    'نوع الشريك: (محلي / دولي / حكومي)',
    'نبذة مختصرة عن الجهة',
    'مجالات التعاون المقترحة',
    'بيانات التواصل (الاسم، المنصب، البريد الإلكتروني، رقم الهاتف)',
  ];

  protected readonly fields: FormField[] = [
    { name: 'type', label: 'نوع الشريك', required: true, placeholder: 'محلي / دولي / حكومي' },
    { name: 'organization', label: 'اسم الجهة', required: true, placeholder: 'أدخل اسم جهتك' },
    { name: 'name', label: 'الاسم والمنصب', required: true, placeholder: 'الاسم – المنصب' },
    { name: 'email', label: 'البريد الإلكتروني', type: 'email', required: true, placeholder: 'name@example.com' },
    { name: 'phone', label: 'رقم الهاتف', type: 'tel', required: true, placeholder: '05XXXXXXXX' },
    { name: 'about', label: 'نبذة مختصرة عن الجهة', type: 'textarea' },
    { name: 'areas', label: 'مجالات التعاون المقترحة', type: 'textarea' },
  ];
}
