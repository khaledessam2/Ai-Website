import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink } from '../../models';

/** Title band + breadcrumb shown at the top of every inner page. */
@Component({
  selector: 'app-page-header',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="surface-dark text-white">
      <div class="container-page py-10 md:py-12">
        <nav aria-label="مسار التنقل" class="text-sm text-white/70">
          <ol class="flex flex-wrap items-center gap-2">
            <li><a routerLink="/" class="hover:text-white">الرئيسية</a></li>
            @for (c of trail(); track c.route) {
              <li aria-hidden="true">/</li>
              <li><a [routerLink]="c.route" class="hover:text-white">{{ c.label }}</a></li>
            }
            <li aria-hidden="true">/</li>
            <li class="text-white" aria-current="page">{{ title() }}</li>
          </ol>
        </nav>
        <h1 class="mt-5 text-3xl leading-snug font-bold md:text-4xl">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="mt-3 max-w-2xl leading-8 text-white/75">{{ subtitle() }}</p>
        }
      </div>
      <div class="brand-stripe h-1"></div>
    </section>
  `,
})
export class PageHeader {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly trail = input<NavLink[]>([]);
}
