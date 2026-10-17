import { Routes } from '@angular/router';

const SITE = 'عمادة تطوير المهارات';

export const routes: Routes = [
  { path: '', title: SITE, loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'about', title: `نبذة عن العمادة – ${SITE}`, loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'about/structure', title: `الهيكل التنظيمي – ${SITE}`, loadComponent: () => import('./pages/structure/structure').then((m) => m.Structure) },
  { path: 'courses', title: `الدورات التدريبية – ${SITE}`, loadComponent: () => import('./pages/courses/courses').then((m) => m.Courses) },
  { path: 'courses/:id', title: `تفاصيل الدورة – ${SITE}`, loadComponent: () => import('./pages/course-detail/course-detail').then((m) => m.CourseDetail) },
  { path: 'plan', title: `خطة الدورات السنوية – ${SITE}`, loadComponent: () => import('./pages/plan/plan').then((m) => m.Plan) },
  { path: 'join-us', title: `انضم لفريق المدربين – ${SITE}`, loadComponent: () => import('./pages/join-us/join-us').then((m) => m.JoinUs) },
  { path: 'business-unit', title: `وحدة الأعمال – ${SITE}`, loadComponent: () => import('./pages/business-unit/business-unit').then((m) => m.BusinessUnit) },
  { path: 'partners', title: `انضم لشركائنا – ${SITE}`, loadComponent: () => import('./pages/partners/partners').then((m) => m.Partners) },
  { path: 'contact', title: `تواصل معنا – ${SITE}`, loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: 'faq', title: `الأسئلة الشائعة – ${SITE}`, loadComponent: () => import('./pages/faq/faq').then((m) => m.Faq) },
  { path: 'news', title: `الأخبار – ${SITE}`, loadComponent: () => import('./pages/news/news').then((m) => m.News) },
  { path: 'news/:id', title: `الأخبار – ${SITE}`, loadComponent: () => import('./pages/news-detail/news-detail').then((m) => m.NewsDetail) },
  { path: 'initiatives/:id', title: `المبادرات – ${SITE}`, loadComponent: () => import('./pages/initiative-detail/initiative-detail').then((m) => m.InitiativeDetail) },
  { path: 'media/annual-reports', title: `التقارير السنوية – ${SITE}`, loadComponent: () => import('./pages/annual-reports/annual-reports').then((m) => m.AnnualReports) },
  { path: 'media/albums', title: `مكتبة المرئيات والصور – ${SITE}`, loadComponent: () => import('./pages/albums/albums').then((m) => m.Albums) },
  { path: 'media/videos', title: `مكتبة الفيديو – ${SITE}`, loadComponent: () => import('./pages/videos/videos').then((m) => m.Videos) },
  { path: '**', title: `الصفحة غير موجودة – ${SITE}`, loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound) },
];
