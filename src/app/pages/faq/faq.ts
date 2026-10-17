import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FaqService } from '../../services/faq.service';
import { Accordion, PageHeader } from '../../shared';

@Component({
  selector: 'app-faq',
  imports: [Accordion, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.html',
})
export class Faq {
  protected readonly groups = inject(FaqService).groups;
}
