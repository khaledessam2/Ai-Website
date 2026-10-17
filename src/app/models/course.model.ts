export type Audience = 'faculty' | 'students' | 'leaders' | 'staff';
export type AudienceFilter = Audience | 'all';
export type DeliveryMode = 'remote' | 'in-person';

export interface Course {
  /** Node id on the source site; used as the route id */
  id: string;
  title: string;
  category: string;
  audience: Audience;
  /** Audience exactly as written on the source site */
  audienceNote: string;
  mode: DeliveryMode;
  location: string;
  /** ISO date (yyyy-mm-dd) */
  date: string;
  image: string;
}

export const AUDIENCE_LABELS: Record<AudienceFilter, string> = {
  all: 'الكل',
  faculty: 'أعضاء هيئة تدريس',
  students: 'طلاب',
  leaders: 'قيادات',
  staff: 'موظفين',
};

/** Maps a free-text audience label from the source data onto a filter key. */
export function audienceOf(label: string): Audience {
  if (label.startsWith('طلاب')) return 'students';
  if (label.startsWith('قيادات')) return 'leaders';
  if (label.startsWith('موظفين')) return 'staff';
  return 'faculty';
}
