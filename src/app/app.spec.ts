import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { Home } from './pages/home/home';
import { CoursesService } from './services/courses.service';
import { Course, coursePricing } from './models';
import { createPager } from './shared';

const providers = [provideRouter(routes), provideHttpClient(), provideHttpClientTesting()];

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App], providers }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers }).compileComponents();
  });

  it('should render the main heading', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(h1?.textContent).toContain('عمادة تطوير المهارات');
  });

  it('keeps every link inside the site', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const links = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('a[href]'));
    const external = links
      .map((a) => a.getAttribute('href') ?? '')
      .filter((href) => /^https?:\/\//.test(href));
    expect(external).toEqual([]);
  });
});

describe('CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers }));

  const course = (over: Partial<Course>): Course => ({
    id: '1', name: 'n', subCategoryId: 'a', subCategoryName: 'A', mainPrice: 71, specialPrice: null, specialValidTill: null,
    isFree: false, reviewsCount: 0, totalStudent: 0, lessonCount: 1, courseLevel: 'Beginner', imageUrl: null, avgRate: null,
    longDescription: null, hasOffer: false, offerPrice: null, validTo: null, ...over,
  });

  it('loads courses from the API and filters by category', () => {
    const http = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(CoursesService);
    const req = http.expectOne((r) => r.url.endsWith('/course/GetAllForWebSiteBuilder'));
    expect(req.request.method).toBe('POST');
    req.flush({ result: { items: [course({ id: 'x' }), course({ id: 'y', subCategoryId: 'b' })] }, isSuccess: true });
    expect(service.courses().length).toBe(2);
    expect(service.filterByCategory('b').map((c) => c.id)).toEqual(['y']);
    expect(service.byId('x')?.id).toBe('x');
  });

  it('prices free, discounted and expired-offer courses', () => {
    const now = new Date('2026-10-19');
    expect(coursePricing(course({ isFree: true }), now).current).toBeNull();
    expect(coursePricing(course({ hasOffer: true, offerPrice: 0, validTo: '2026-10-27T00:00:00' }), now)).toEqual({ current: 0, original: 71, offerEnds: '2026-10-27T00:00:00' });
    expect(coursePricing(course({ hasOffer: true, offerPrice: 0, validTo: '2026-10-01T00:00:00' }), now).current).toBe(71);
  });
});

describe('createPager', () => {
  it('pages through items and clamps at the ends', () => {
    const pager = createPager(() => [1, 2, 3, 4, 5], 2);
    expect(pager.visible()).toEqual([1, 2]);
    expect(pager.canPrev()).toBe(false);
    pager.next();
    pager.next();
    pager.next();
    expect(pager.visible()).toEqual([5]);
    expect(pager.canNext()).toBe(false);
    pager.reset();
    expect(pager.visible()).toEqual([1, 2]);
  });
});
