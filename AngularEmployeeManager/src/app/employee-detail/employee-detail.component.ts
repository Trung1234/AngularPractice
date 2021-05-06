import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  list: Employee[] = [];
  model: Employee
  constructor( private dataServ: DataService) { }

  ngOnInit(): void {
     this.dataServ.getSharedItem().subscribe((item) =>
     {
      this.model = item;
     } );
     this.dataServ.getSharedListItem().subscribe((list) =>
     {
      this.list = list;
     } );
  }
  onSubmit() {
    let cloneObject = JSON.parse(JSON.stringify(this.model));
    var index = this.list.indexOf(this.model);
    this.list.splice(index, 1);
    this.list.push(cloneObject);
    this.dataServ.sendSharedListItem(this.list);
  }
}
