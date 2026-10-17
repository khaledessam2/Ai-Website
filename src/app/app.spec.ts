import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { Home } from './pages/home/home';
import { CoursesService } from './services/courses.service';
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
  it('filters by audience and finds by id', () => {
    const service = TestBed.inject(CoursesService);
    const students = service.filterByAudience('students');
    expect(students.length).toBeGreaterThan(0);
    expect(students.every((c) => c.audience === 'students')).toBe(true);
    expect(service.filterByAudience('all')).toEqual(service.courses());
    expect(service.byId('4848')?.title).toContain('الحوسبة السحابية');
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
