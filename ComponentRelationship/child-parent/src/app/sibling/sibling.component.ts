import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message: string;
  constructor(private data: DataService ) {

  }

  ngOnInit() {
    // hàm này nhân  data từ DataService truyền tới qua: this.messageSource.next(message)
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
      this.data.changeMessage("Hello from Sibling");
  }
}

