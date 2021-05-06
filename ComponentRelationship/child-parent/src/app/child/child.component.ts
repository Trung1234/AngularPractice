import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string = "Hello from child!"

  @Output() outputFuntion = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {

  }

  sendMessage() {
    this.outputFuntion.emit(this.message)
  }

}
