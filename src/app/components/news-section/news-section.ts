import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ArabicDatePipe, Icon, SectionHeading } from '../../shared';

@Component({
  selector: 'app-news-section',
  imports: [ArabicDatePipe, Icon, RouterLink, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news-section.html',
})
export class NewsSection {
  protected readonly news = inject(NewsService).news;
}
