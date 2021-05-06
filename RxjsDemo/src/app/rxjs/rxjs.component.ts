import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // Emit the values 1, 2, 3, 4, 5,6
   const squareOf2 = of(1, 2, 3, 4, 5,6)
   .pipe( filter(num => num % 2 === 0),
     map(num => num * num)
   );
   squareOf2.subscribe( (num) => console.log(num));

   //Emit the array [1, 2, 3]
   of([1,2,3]) .subscribe(
     next => console.log('next:', next),
     err => console.log('error:', err),
     () => console.log('the end'),
   );

   //EMITTING AN OBJECT, ARRAY, AND FUNCTION
   //emits values of any type
 const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
   return 'Hello';
 });
 //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
 const subscribe = source.subscribe(
   val => console.log(val),
   err => console.log(err)
   );

//    // Create simple observable that emits three values
//  const myObservable = of(1, 2, 3);

//  // Create observer object
//  const myObserver = {
//    next: (x: any) => console.log('Observer got a next value: ' + x),
//    error:(err:any) => console.error('Observer got an error: ' + err),
//    complete: () => console.log('Observer got a complete notification'),
//  };
}
}
