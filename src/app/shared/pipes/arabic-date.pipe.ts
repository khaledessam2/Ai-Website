import { Pipe, PipeTransform } from '@angular/core';

const FORMATTER = new Intl.DateTimeFormat('ar-u-nu-latn-ca-gregory', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

@Pipe({ name: 'arabicDate' })
export class ArabicDatePipe implements PipeTransform {
  transform(iso: string): string {
    return FORMATTER.format(new Date(`${iso}T00:00:00`));
  }
}
