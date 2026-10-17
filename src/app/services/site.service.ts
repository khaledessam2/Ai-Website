import { Injectable } from '@angular/core';
import { FooterGroup, Logo, NavLink, Objective, Pillar, SiteInfo, Stat } from '../models';

/** Content mirrors https://dsd.ksu.edu.sa/ar */
@Injectable({ providedIn: 'root' })
export class SiteService {
  readonly info: SiteInfo = {
    name: 'عمادة تطوير المهارات',
    university: 'جامعة الملك سعود',
    vision: 'أن تكون العمادة صرحاً رائداً ومتميزاً لتطوير المهارات للمستفيدين لبناء اقتصاد المعرفة.',
    credit: 'تم تطويره وصيانته بواسطة عمادة التعاملات الإلكترونية والاتصالات - جامعة الملك سعود',
    lastUpdated: '2026/10/13',
    contact: [
      { icon: 'monitor', label: 'المنصة', value: 'جامعة المللك سعود' },
      { icon: 'clock', label: 'أوقات العمل', value: 'الأحد - الخميس (8 ص - 2 م)' },
      { icon: 'phone', label: 'رقم الاتصال الموحد من خارج الجامعة', value: '0118062223', ltr: true },
      { icon: 'headset', label: 'رقم التواصل الموحد من داخل الجامعة', value: '62223', ltr: true },
    ],
  };

  readonly nav: NavLink[] = [
    { label: 'الرئيسية', route: '/' },
    {
      label: 'عن العمادة',
      route: '/about',
      children: [
        { label: 'نبذة عن العمادة', route: '/about' },
        { label: 'الهيكل التنظيمي', route: '/about/structure' },
      ],
    },
    {
      label: 'المركز الإعلامي',
      route: '/news',
      children: [
        { label: 'الأخبار', route: '/news' },
        { label: 'التقارير السنوية', route: '/media/annual-reports' },
        { label: 'مكتبة المرئيات والصور', route: '/media/albums' },
        { label: 'مكتبة الفيديو', route: '/media/videos' },
      ],
    },
    { label: 'خطة الدورات السنوية', route: '/plan' },
    { label: 'الدورات التدريبية', route: '/courses' },
    { label: 'انضم لفريق المدربين', route: '/join-us' },
    { label: 'وحدة الأعمال', route: '/business-unit' },
    { label: 'انضم لشركائنا', route: '/partners' },
    { label: 'تواصل معنا', route: '/contact' },
  ];

  readonly aboutPillars: Pillar[] = [
    {
      icon: 'eye',
      title: 'الرؤية',
      text: 'أن تكون العمادة صرحاً رائداً ومتميزاً لتطوير المهارات للمستفيدين لبناء اقتصاد المعرفة.',
    },
    {
      icon: 'target',
      title: 'الرسالة',
      text: 'تقديم برامج ودورات تدريبية متميزة ودراسات تطويرية تسهم في بناء مجتمع المعرفة من خلال بيئة عمل محفزة وداعمة للإبداع والابتكار والتوظيف الأمثل للتقنية والشراكة المحلية والعالمية الفاعلة.',
    },
    {
      icon: 'shield',
      title: 'سياسة الجودة',
      text: 'تقديم الخدمات التدريبية وتطوير مهارات منسوبي الجامعة وفق المعايير الوطنية والدولية، وتطبيق نظام إدارة الجودة وفقاً للمواصفة الدولية (ISO 9001:2015).',
    },
  ];

  readonly qualityPolicy: string[] = [
    'تعمل عمادة تطوير المهارات بجامعة الملك سعود على تقديم خدماتها التدريبية وتطوير مهارات منسوبي جامعة الملك سعود من أعضاء هيئة التدريس والموظفين والطلاب، وتسعى إلى تجويدها وفقًا للمعايير الوطنية والدولية، وتحقيق أعلى مستويات التميز في الأداء المؤسسي بما يعزّز ويسهم في تحقيق رؤية الجامعة وأهدافها الاستراتيجية نحو الريادة والتميّز العالمي.',
    'ولتحقيق ذلك فإن العمادة تلتزم بتعزيز جودة البرامج والخدمات التدريبية لتحقيق التميز المحلي والعالمي، وتنمية مهارات القيادات الأكاديمية والإدارية، ورفع مستوى الأداء الوظيفي والمهني لمنسوبي الجامعة. كما تلتزم ببناء شراكات داخلية وخارجية لتقديم برامج تدريبية نوعية وتعزيز موارد العمادة، إضافة إلى التوسع في تقديم البرامج التدريبية، كما تلتزم عمادة تطوير المهارات بخدمة المجتمع من خلال بناء جسور التعاون والشراكة محليًا ودوليًا.',
    'كما تلتزم عمادة تطوير المهارات بتطبيق المتطلبات القانونية والتنظيمية كافة، وباتباع أساليب المتابعة الفنية والإدارية والمراجعة الدورية والتحسين المستمر لأهداف الجودة، لضمان فاعلية نظام إدارة الجودة وفقًا لمتطلبات المواصفة الدولية (ISO 9001:2015).',
  ];

  readonly objectives: Objective[] = [
    { title: 'البرامج عن بُعد', text: 'التوسع في تقديم البرامج التدريبية عن بعد.' },
    { title: 'الشراكات', text: 'بناء شراكات داخلية وخارجية لتقديم برامج تدريبية لتعزيز موارد العمادة.' },
    { title: 'تطوير هيئة التدريس', text: 'تطوير مهارات أعضاء هيئة التدريس.' },
    { title: 'جودة البرامج والخدمات', text: 'تعزيز جودة البرامج والخدمات التي تقدمها العمادة لتحقيق التميز المحلي والعالمي.' },
    { title: 'رفع الأداء الوظيفي', text: 'المساهمة في رفع مستوى الأداء الوظيفي والمهني لموظفي الجامعة.' },
    { title: 'تنمية القيادات', text: 'المساهمة في تنمية مهارات القيادات الأكاديمية والإدارية في الجامعة.' },
    { title: 'مهارات التوظيف', text: 'تنمية مهارات التوظيف لدى طلاب الجامعة.' },
    { title: 'خدمة المجتمع', text: 'تقديم خدمات التدريب في مجال التنمية البشرية للمساهمة في خدمة المجتمع والارتقاء بجودة الحياة.' },
  ];

  readonly stats: Stat[] = [
    { value: 6089, label: 'عدد الدورات والورش التدريبية', icon: 'images/stats/stat-1.svg' },
    { value: 3818, label: 'عدد الأيام التدريبية', icon: 'images/stats/stat-2.webp' },
    { value: 16293, label: 'عدد الساعات التدريبية', icon: 'images/stats/stat-3.svg' },
    { value: 83356, label: 'عدد المستفيدين من الدورات والورش التدريبية', icon: 'images/stats/stat-4.svg' },
  ];

  readonly partners: Logo[] = [
    { name: 'Bakkah', image: 'images/partners/partner-1.webp' },
    { name: 'CCL – Center for Creative Leadership', image: 'images/partners/partner-2.webp' },
    { name: 'CIFAL Saudi Arabia', image: 'images/partners/partner-3.webp' },
    { name: 'CNTXT Academy', image: 'images/partners/partner-4.webp' },
    { name: 'Informa Connect Academy', image: 'images/partners/partner-5.webp' },
    { name: 'معهد الإدارة العامة', image: 'images/partners/partner-6.webp' },
    { name: 'معهد الأمير سعود الفيصل للدراسات الدبلوماسية', image: 'images/partners/partner-7.webp' },
    { name: 'PMI – Project Management Institute', image: 'images/partners/partner-8.webp' },
    { name: 'Tharwah', image: 'images/partners/partner-9.webp' },
    { name: 'أكاديمية الحوكمة', image: 'images/partners/partner-10.webp' },
  ];

  readonly accreditations: Logo[] = [
    { name: 'PMI – Project Management Institute', image: 'images/partners/partner-11.webp' },
    { name: 'IFTDO – International Federation of Training and Development Organisations', image: 'images/partners/partner-12.webp' },
    { name: 'SEDA – Staff and Educational Development Association', image: 'images/partners/partner-13.webp' },
  ];

  readonly footerGroups: FooterGroup[] = [
    {
      title: 'عن العمادة',
      links: [
        { label: 'نبذة عن العمادة', route: '/about' },
        { label: 'الهيكل التنظيمي', route: '/about/structure' },
        { label: 'التقارير السنوية', route: '/media/annual-reports' },
        { label: 'مكتبة المرئيات والصور', route: '/media/albums' },
        { label: 'مكتبة الفيديو', route: '/media/videos' },
      ],
    },
    {
      title: 'الخدمات',
      links: [
        { label: 'الدورات التدريبية', route: '/courses' },
        { label: 'خطة الدورات السنوية', route: '/plan' },
        { label: 'انضم لفريق المدربين', route: '/join-us' },
        { label: 'وحدة الأعمال', route: '/business-unit' },
        { label: 'انضم لشركائنا', route: '/partners' },
      ],
    },
    {
      title: 'الاتصال والدعم',
      links: [
        { label: 'خدمة المستفيدين', route: '/contact' },
        { label: 'الأسئلة الشائعة', route: '/faq' },
        { label: 'تواصل معنا', route: '/contact' },
      ],
    },
  ];
}
