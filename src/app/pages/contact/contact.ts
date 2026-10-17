import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactSection } from '../../components/contact-section/contact-section';
import { PageHeader } from '../../shared';

@Component({
  selector: 'app-contact',
  imports: [ContactSection, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-header title="تواصل معنا" subtitle="نحن هنا لمساعدتك. تواصل معنا للحصول على المعلومات والدعم الذي تحتاجه." />
    <app-contact-section />
  `,
})
export class Contact {}
