import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { ArabicDatePipe, Icon, PageHeader } from '../../shared';

@Component({
  selector: 'app-news',
  imports: [ArabicDatePipe, Icon, PageHeader, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news.html',
})
export class News {
  protected readonly news = inject(NewsService).news;
}
