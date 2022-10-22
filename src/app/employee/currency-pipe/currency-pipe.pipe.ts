import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {
  transform(value?: string ,countryCode?: string): any{

    let newValue;
    if(countryCode == 'EUR'){
      newValue = "€" + value;
    }else if(countryCode === 'US'){
      newValue = "$" + value;
    }else if(countryCode === 'IND'){
      newValue = "₹" + value;
    }
    return newValue;
  }


}
