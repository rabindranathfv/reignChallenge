import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'specialDate'
})
export class SpecialDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(moment().format('YYYY-MM-DD  HH:mm:ss'));
    console.log(value);
    return value;
  }

}
