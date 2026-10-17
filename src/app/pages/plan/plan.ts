import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AUDIENCE_LABELS, AudienceFilter, MONTHS, audienceOf } from '../../models';
import { PlanService } from '../../services/plan.service';
import { ArabicDatePipe, Icon, PageHeader, createPager } from '../../shared';

@Component({
  selector: 'app-plan',
  imports: [ArabicDatePipe, Icon, PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plan.html',
})
export class Plan {
  private readonly plan = inject(PlanService);

  protected readonly months = MONTHS;
  protected readonly filters = (Object.keys(AUDIENCE_LABELS) as AudienceFilter[]).map((key) => ({
    key,
    label: AUDIENCE_LABELS[key],
  }));

  protected readonly month = signal<number | null>(null);
  protected readonly audience = signal<AudienceFilter>('all');

  protected readonly monthName = computed(() => MONTHS.find((m) => m.n === this.month())?.ar ?? '');

  private readonly rows = computed(() => {
    const month = this.month();
    const audience = this.audience();
    return this.plan
      .entries()
      .filter((e) => e.month === month && (audience === 'all' || audienceOf(e.audience) === audience))
      .sort((a, b) => b.date.localeCompare(a.date));
  });

  protected readonly pager = createPager(this.rows, 12);
  protected readonly total = computed(() => this.rows().length);
  protected readonly pages = computed(() => Array.from({ length: this.pager.pageCount() }, (_, i) => i));

  protected countFor(month: number): number {
    return this.plan.entries().filter((e) => e.month === month).length;
  }

  protected pick(month: number | null): void {
    this.month.set(month);
    this.audience.set('all');
    this.pager.reset();
  }

  protected filter(audience: AudienceFilter): void {
    this.audience.set(audience);
    this.pager.reset();
  }

  protected day(iso: string): string {
    return String(Number(iso.slice(8, 10)));
  }
}
