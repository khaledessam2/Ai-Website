import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-carousel-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex gap-3">
      <button type="button" class="ctrl" [disabled]="!canPrev()" (click)="prev.emit()" aria-label="السابق">
        <span class="material-symbols-outlined" aria-hidden="true" style="font-size: 18px">arrow_forward</span>
      </button>
      <button type="button" class="ctrl" [disabled]="!canNext()" (click)="next.emit()" aria-label="التالي">
        <span class="material-symbols-outlined" aria-hidden="true" style="font-size: 18px">arrow_back</span>
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
