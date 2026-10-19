export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  /** ISO date (yyyy-mm-dd) */
  date: string;
  image: string;
  /** Article paragraphs */
  body: string[];
}
