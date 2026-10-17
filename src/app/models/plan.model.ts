export interface PlanEntry {
  month: number;
  category: string;
  track: string;
  title: string;
  /** ISO date (yyyy-mm-dd) */
  date: string;
  day: string;
  days: number;
  hours: number;
  audience: string;
}

export const MONTHS: { n: number; ar: string; en: string }[] = [
  { n: 1, ar: 'يناير', en: 'January' },
  { n: 2, ar: 'فبراير', en: 'February' },
  { n: 3, ar: 'مارس', en: 'March' },
  { n: 4, ar: 'أبريل', en: 'April' },
  { n: 5, ar: 'مايو', en: 'May' },
  { n: 6, ar: 'يونيو', en: 'June' },
  { n: 7, ar: 'يوليو', en: 'July' },
  { n: 8, ar: 'أغسطس', en: 'August' },
  { n: 9, ar: 'سبتمبر', en: 'September' },
  { n: 10, ar: 'أكتوبر', en: 'October' },
  { n: 11, ar: 'نوفمبر', en: 'November' },
  { n: 12, ar: 'ديسمبر', en: 'December' },
];
