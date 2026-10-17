import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormField } from '../../models';

/** Generic request form (registration, enquiry…). Nothing is sent anywhere yet; wire `submitted` to an API. */
@Component({
  selector: 'app-request-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (sent()) {
      <p class="mb-6 rounded-md bg-accent-soft px-5 py-4 font-medium text-accent-hover" role="status">{{ successMessage() }}</p>
    }
    <form class="grid gap-5 sm:grid-cols-2" (submit)="submit($event)">
      @for (f of fields(); track f.name) {
        <label class="grid gap-2 text-sm font-semibold" [class.sm:col-span-2]="f.type === 'textarea'">
          <span>{{ f.label }} @if (f.required) { <span class="text-accent">*</span> }</span>
          @if (f.type === 'textarea') {
            <textarea [name]="f.name" rows="4" [required]="!!f.required" [attr.placeholder]="f.placeholder" class="rounded-sm border border-line bg-tint/50 px-4 py-3 font-normal outline-none focus:border-accent"></textarea>
          } @else {
            <input [name]="f.name" [type]="f.type ?? 'text'" [required]="!!f.required" [attr.placeholder]="f.placeholder" dir="auto" class="rounded-sm border border-line bg-tint/50 px-4 py-3 font-normal outline-none focus:border-accent" />
          }
        </label>
      }
      <button type="submit" class="btn-primary sm:col-span-2">{{ submitLabel() }}</button>
    </form>
  `,
})
export class RequestForm {
  readonly fields = input.required<FormField[]>();
  readonly submitLabel = input('إرسال الطلب');
  readonly successMessage = input('شكراً لك، تم استلام طلبك وسنتواصل معك قريباً.');

  protected readonly sent = signal(false);

  protected submit(event: Event): void {
    event.preventDefault();
    (event.target as HTMLFormElement).reset();
    this.sent.set(true);
  }
}
