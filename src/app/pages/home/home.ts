import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSection } from '../../components/about-section/about-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { CoursesSection } from '../../components/courses-section/courses-section';
import { Hero } from '../../components/hero/hero';
import { InitiativesSection } from '../../components/initiatives-section/initiatives-section';
import { NewsSection } from '../../components/news-section/news-section';
import { PartnersSection } from '../../components/partners-section/partners-section';
import { StatsStrip } from '../../components/stats-strip/stats-strip';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    StatsStrip,
    AboutSection,
    CoursesSection,
    InitiativesSection,
    NewsSection,
    PartnersSection,
    ContactSection,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {}
