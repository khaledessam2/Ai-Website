import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FaqItem } from '../../models';

@Component({
  selector: 'app-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="space-y-3">
      @for (item of items(); track item.q; let i = $index) {
        <li class="overflow-hidden rounded-md bg-white shadow-card">
          <h3>
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 px-5 py-4 text-start font-semibold"
              [attr.aria-expanded]="open() === i"
              (click)="toggle(i)"
            >
              <span>{{ item.q }}</span>
              <span class="material-symbols-outlined text-accent" aria-hidden="true" style="font-size: 18px">{{ open() === i ? 'remove' : 'add' }}</span>
            </button>
          </h3>
          @if (open() === i) {
            <p class="border-t border-line px-5 py-4 leading-8 whitespace-pre-line text-muted">{{ item.a }}</p>
          }
        </li>
      }
    </ul>
  `,
})
export class Accordion {
  readonly items = input.required<FaqItem[]>();

  protected readonly open = signal<number | null>(null);

  protected toggle(index: number): void {
    this.open.update((current) => (current === index ? null : index));
  }
}
