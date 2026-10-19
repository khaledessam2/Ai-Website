import { DecimalPipe } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { SiteService } from '../../services/site.service';
import { Icon } from '../../shared/icon/icon';

const DURATION_MS = 2000;

@Component({
  selector: 'app-stats-strip',
  imports: [DecimalPipe, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stats-strip.html',
})
export class StatsStrip {
  protected readonly stats = inject(SiteService).stats;
  protected readonly progress = signal(0);

  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.progress.set(1);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          this.run();
        },
        { threshold: 0.3 },
      );
      observer.observe(host);
    });
  }

  private run(): void {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      this.progress.set(1 - Math.pow(1 - t, 3)); // ease-out cubic
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
