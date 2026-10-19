import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero.html',
})
export class Hero {
  slideIndex = signal<number>(0);
  slides = signal<string[]>( [
    "images/banner.jpeg",
    "images/03.jpg",
    "images/دعوات الجدد (1)_0.jpg",
    "images/images.jpg",
    "images/�010-تطوير-المهارات-الشخصية-والاداريه-و-القيادية-website-1024x576.png",
  ]) ;

  currentSlide = computed(()=>{
    return this.slides()[this.slideIndex()] ;
  })

  isFirst = computed(() => this.slideIndex() === 0);
  isLast = computed(() => this.slideIndex() >= this.slides().length - 1);

  next() {
    if (!this.isLast()) {
      this.slideIndex.update(i => i + 1);
    }
  }

  prev() {
    if (!this.isFirst()) {
      this.slideIndex.update(i => i - 1);
    }
  }

  goTo(index: number) {
    this.slideIndex.set(index);
  }
}
