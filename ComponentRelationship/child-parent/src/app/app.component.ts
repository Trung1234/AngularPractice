import { Component, AfterViewInit ,ViewChild, ElementRef} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  message:string;

 receivingFunction(obj: string) {
    this.message = obj;
  }



  ngAfterViewInit() {
    // this.messageFromChild =  this.child.mesesag;
  }


}
