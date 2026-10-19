import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Course, PagedResponse } from '../models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private readonly http = inject(HttpClient);
  /** Same-origin path; the dev proxy (proxy.conf.json) or the host's reverse proxy forwards it to the gateway. */
  private readonly baseUrl = environment.enviromentURL;

  private readonly _courses = signal<Course[]>([]);
  private readonly _loading = signal(true);
  private readonly _failed = signal(false);

  readonly courses = this._courses.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly failed = this._failed.asReadonly();

  /** Distinct sub-categories present in the loaded courses, for filter tabs. */
  readonly categories = computed(() => {
    const seen = new Map<string, string>();
    for (const c of this._courses()) seen.set(c.subCategoryId, c.subCategoryName.trim());
    return Array.from(seen, ([id, name]) => ({ id, name }));
  });

  constructor() {
    this.load();
  }

  load(pageNumber = 1, pageSize = 100): void {
    this._loading.set(true);
    this._failed.set(false);
    this.http
      .post<PagedResponse<Course>>(
        `${this.baseUrl}/course/GetAllForWebSiteBuilder`,
        { pageNumber, pageSize },
        { headers: { language: 'en', flag: 'Web' } },
      )
      .subscribe({
        next: (res) => {
          this._courses.set(res.result.items);
          this._loading.set(false);
        },
        error: () => {
          this._failed.set(true);
          this._loading.set(false);
        },
      });
  }

  byId(id: string): Course | undefined {
    return this._courses().find((c) => c.id === id);
  }

  filterByCategory(subCategoryId: string): Course[] {
    const all = this._courses();
    return subCategoryId === 'all' ? all : all.filter((c) => c.subCategoryId === subCategoryId);
  }
}
