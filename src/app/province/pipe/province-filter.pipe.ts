import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'provinceFilter'
})
export class ProvinceFilterPipe implements PipeTransform {

  /**
   * 
   * Function provincePipe realtime filter province
   * @author  sarawutt.b
   * @param value as array of province Object
   * @param filterBy as a string of search key
   */
  transform(value: any, filterBy: string): any {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    console.log(value);
    //First find by province name
    //return filterBy ? value.filter(p => p.Province.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    return filterBy ? value.filter(data => {
      return data.Province.name.toString().toLocaleLowerCase().includes(filterBy) ||
        data.Province.name_eng.toString().toLocaleLowerCase().includes(filterBy) ||
        data.Region.name.toString().toLocaleLowerCase().includes(filterBy) ||
        data.Region.name_eng.toString().toLocaleLowerCase().includes(filterBy)
    }) : value;
  }

}
