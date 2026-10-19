/** Internal navigation entry; `route` is an in-app path. */
export interface NavLink {
  label: string;
  route: string;
  children?: NavLink[];
}

export interface FooterGroup {
  title: string;
  links: NavLink[];
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  ltr?: boolean;
}

export interface SiteInfo {
  name: string;
  university: string;
  vision: string;
  credit: string;
  lastUpdated: string;
  contact: ContactDetail[];
}

export interface Pillar {
  icon: string;
  title: string;
  text: string;
}

export interface Objective {
  title: string;
  text: string;
}

export interface Stat {
  value: number;
  label: string;
  icon: string;
}

export interface Logo {
  name: string;
  image: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export interface AnnualReport {
  id: string;
  title: string;
  cover: string | null;
  pdf: string | null;
}

export interface Album {
  title: string;
  date: string;
  photos: number;
}

export interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
  placeholder?: string;
}
