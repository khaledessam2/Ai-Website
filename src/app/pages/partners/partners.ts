import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeader } from '../../shared';

@Component({
  selector: 'app-partners',
  imports: [PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './partners.html',
})
export class Partners {
  protected readonly requirements = [
    'نوع الشريك: (محلي/دولي/حكومي)',
    'نبذة مختصرة عن الجهة',
    'مجالات التعاون المقترحة',
    'بيانات التواصل (الاسم، المنصب، البريد الإلكتروني، رقم الهاتف)',
  ];
}
