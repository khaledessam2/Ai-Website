import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { ArabicDatePipe, Icon, PageHeader } from '../../shared';

@Component({
  selector: 'app-news-detail',
  imports: [ArabicDatePipe, Icon, PageHeader, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './news-detail.html',
})
export class NewsDetail {
  private readonly news = inject(NewsService);

  /** Route param */
  readonly id = input.required<string>();

  protected readonly item = computed(() => this.news.byId(this.id()));
  protected readonly paragraphs = computed(() => this.news.bodies()[this.id()] ?? []);
  protected readonly trail = [{ label: 'الأخبار', route: '/news' }];
}
