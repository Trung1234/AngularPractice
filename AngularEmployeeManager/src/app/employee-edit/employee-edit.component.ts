import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  model: Employee  ={} as Employee;
  list : Employee[] =[];

  constructor( private dataServ:DataService) { }

  ngOnInit(): void {
  }

  getItem() {
    this.dataServ.getSharedItem().subscribe(item =>
      (this.model = item)
    );
  }

  onSubmit() {
    this.model.id = this.list.length+1;
    let cloneObject = JSON.parse(JSON.stringify(this.model));
    this.list.push(cloneObject);
    this.dataServ.sendSharedListItem(this.list);
  }

}
