import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'search',
   pure: true
})

export class SearchPipe implements PipeTransform {
   transform(arrays: any[], args:string=''): any[] {

     if(!args) return arrays;
     else {
        return arrays.filter( p => (p.gameName && p.gameName.toLocaleLowerCase().trim().includes(args.toLocaleLowerCase().trim()) ));

     }
   }
}
