export type Audience = 'faculty' | 'students' | 'leaders' | 'staff';
export type AudienceFilter = Audience | 'all';

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

/** A course as returned by `POST /course/GetAllForWebSiteBuilder`. */
export interface Course {
  id: string;
  name: string;
  subCategoryId: string;
  subCategoryName: string;
  mainPrice: number | null;
  specialPrice: number | null;
  specialValidTill: string | null;
  isFree: boolean;
  reviewsCount: number;
  totalStudent: number;
  lessonCount: number;
  courseLevel: CourseLevel;
  imageUrl: string | null;
  avgRate: number | null;
  /** HTML authored in the LMS rich-text editor */
  longDescription: string | null;
  hasOffer: boolean;
  offerPrice: number | null;
  /** ISO date-time the offer ends */
  validTo: string | null;
}

export interface PagedResponse<T> {
  result: { currentPage: number; totalPages: number; pageSize: number; totalCount: number; items: T[] };
  isSuccess: boolean;
  message: string;
}

export const COURSE_LEVEL_LABELS: Record<CourseLevel, string> = {
  Beginner: 'مبتدأ',
  Intermediate: 'متوسط',
  Advanced: 'متقدم',
};

export interface CoursePricing {
  /** null when the course is free */
  current: number | null;
  /** Struck-through price when a discount applies */
  original: number | null;
  /** ISO date-time the discount ends */
  offerEnds: string | null;
}

export function coursePricing(c: Course, now = new Date()): CoursePricing {
  if (c.isFree) return { current: null, original: null, offerEnds: null };
  const main = c.mainPrice ?? 0;
  if (c.hasOffer && c.offerPrice !== null && (!c.validTo || new Date(c.validTo) > now)) {
    return { current: c.offerPrice, original: main, offerEnds: c.validTo };
  }
  if (c.specialPrice !== null && (!c.specialValidTill || new Date(c.specialValidTill) > now)) {
    return { current: c.specialPrice, original: main, offerEnds: c.specialValidTill };
  }
  return { current: main, original: null, offerEnds: null };
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
