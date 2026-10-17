import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FaqGroup } from '../models';

/** Source: https://dsd.ksu.edu.sa/ar/faq */
@Injectable({ providedIn: 'root' })
export class FaqService {
  private readonly http = inject(HttpClient);

  readonly groups = toSignal(this.http.get<FaqGroup[]>('data/faq.json'), {
    initialValue: [] as FaqGroup[],
  });

  groupByTitle(title: string) {
    return computed(() => this.groups().find((g) => g.title === title));
  }
}
