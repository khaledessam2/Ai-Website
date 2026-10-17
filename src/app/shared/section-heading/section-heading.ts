import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="wrapperClass()">
      <div [class]="align() === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'">
        <span class="eyebrow">{{ eyebrow() }}</span>
        <h2 class="mt-4 text-3xl leading-[1.35] font-bold md:text-[2.5rem]" [class]="dark() ? 'text-white' : 'text-ink'">
          {{ title() }}
        </h2>
        @if (description()) {
          <p class="mt-4 leading-8" [class]="dark() ? 'text-white/75' : 'text-muted'">{{ description() }}</p>
        }
      </div>
      <ng-content />
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly align = input<'start' | 'center'>('start');
  readonly dark = input(false);

  protected readonly wrapperClass = computed(() =>
    this.align() === 'center' ? 'text-center' : 'flex flex-wrap items-center justify-between gap-6',
  );
}
