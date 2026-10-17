import { computed, signal } from '@angular/core';

/** Page-by-page window over a reactive list, used by carousels and listings. */
export function createPager<T>(items: () => T[], pageSize: number) {
  const page = signal(0);

  const pageCount = computed(() => Math.max(1, Math.ceil(items().length / pageSize)));
  const current = computed(() => Math.min(page(), pageCount() - 1));

  return {
    visible: computed(() => items().slice(current() * pageSize, (current() + 1) * pageSize)),
    /** Zero-based index of the visible page */
    current,
    pageCount,
    canPrev: computed(() => current() > 0),
    canNext: computed(() => current() < pageCount() - 1),
    prev: () => page.set(Math.max(0, current() - 1)),
    next: () => page.set(Math.min(pageCount() - 1, current() + 1)),
    goTo: (index: number) => page.set(Math.min(Math.max(0, index), pageCount() - 1)),
    reset: () => page.set(0),
  };
}
