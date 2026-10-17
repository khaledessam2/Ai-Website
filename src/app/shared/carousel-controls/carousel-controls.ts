import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-carousel-controls',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex gap-3">
      <button type="button" class="ctrl" [disabled]="!canPrev()" (click)="prev.emit()" aria-label="السابق">
        <app-icon name="arrow-right" />
      </button>
      <button type="button" class="ctrl" [disabled]="!canNext()" (click)="next.emit()" aria-label="التالي">
        <app-icon name="arrow-left" />
      </button>
    </div>
  `,
  styles: `
    .ctrl {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border-radius: 9999px;
      color: #fff;
      background: var(--color-accent);
      box-shadow: var(--shadow-glow);
      transition: background 0.2s, transform 0.2s;
    }
    .ctrl:hover:not(:disabled) {
      background: var(--color-accent-hover);
      transform: translateY(-2px);
    }
    .ctrl:disabled {
      background: rgb(148 163 184 / 0.55);
      box-shadow: none;
      cursor: not-allowed;
    }
  `,
})
export class CarouselControls {
  readonly canPrev = input(false);
  readonly canNext = input(false);
  readonly prev = output<void>();
  readonly next = output<void>();
}
