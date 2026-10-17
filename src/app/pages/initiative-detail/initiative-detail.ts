import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InitiativesService } from '../../services/initiatives.service';
import { Icon, PageHeader } from '../../shared';

@Component({
  selector: 'app-initiative-detail',
  imports: [Icon, PageHeader, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './initiative-detail.html',
})
export class InitiativeDetail {
  private readonly service = inject(InitiativesService);

  /** Route param */
  readonly id = input.required<string>();

  protected readonly item = computed(() => this.service.byId(this.id()));
  protected readonly others = computed(() => this.service.initiatives().filter((i) => i.id !== this.id()));
}
