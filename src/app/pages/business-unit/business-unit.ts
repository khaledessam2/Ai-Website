import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-business-unit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './business-unit.html',
})
export class BusinessUnit {}
