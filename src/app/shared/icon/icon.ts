import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconName } from '../../models';

const ICONS: Record<IconName, string> = {
  'arrow-left': 'arrow_back',
  'arrow-right': 'arrow_forward',
  'arrow-up': 'arrow_upward',
  book: 'menu_book',
  calendar: 'calendar_month',
  'chevron-down': 'expand_more',
  'chevron-left': 'chevron_left',
  'chevron-right': 'chevron_right',
  clock: 'schedule',
  close: 'close',
  download: 'download',
  eye: 'visibility',
  groups: 'groups',
  headset: 'headset_mic',
  mail: 'mail',
  'map-pin': 'location_on',
  menu: 'menu',
  monitor: 'desktop_windows',
  minus: 'remove',
  plus: 'add',
  phone: 'call',
  shield: 'verified_user',
  target: 'target',
  user: 'person',
};

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="material-symbols-outlined" aria-hidden="true" [style.font-size.px]="size()">{{ glyph() }}</span>`,
  host: { class: 'inline-flex shrink-0 leading-none' },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(18);

  protected readonly glyph = computed(() => ICONS[this.name()]);
}
