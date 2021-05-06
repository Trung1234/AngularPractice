import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sharedItem = new BehaviorSubject<Employee>(new Employee());
  private shareListItem:BehaviorSubject<Employee[]>  = new BehaviorSubject<Employee[]>(null);
  public shareData :Employee = {} as Employee ;


  constructor() { }

   public sendSharedListItem(list: Employee[]) {

    this.shareListItem.next(list);
  }

  getSharedListItem(): Observable<any[]> {
    return this.shareListItem.asObservable();
  }


  sendSharedItem(Employee: Employee) {
    this.sharedItem.next(Employee);
  }

  getSharedItem(): Observable<any> {
    return this.sharedItem.asObservable();
  }

}
