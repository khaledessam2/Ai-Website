import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlanEntry } from '../models';

/** Annual course plan, source: https://dsd.ksu.edu.sa/ar/plan */
@Injectable({ providedIn: 'root' })
export class PlanService {
  private readonly http = inject(HttpClient);

  readonly entries = toSignal(this.http.get<PlanEntry[]>('data/plan.json'), {
    initialValue: [] as PlanEntry[],
  });
}
