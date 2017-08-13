import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serchProvince'
})
export class SerchProvincePipe implements PipeTransform {

  transform(value: any, query?: any): any {
    return value.filter(data=>{
        data.name.toString().toLowerCase.includes(query);
    });
  }

}
