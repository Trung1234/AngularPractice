import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  listUsers: any[];
  constructor(private userService: UserService)
  {  }

  ngOnInit() :void {
// Dung http với Observable
     this.userService.getAllUsers().subscribe(
       (res: any) => {
            this.listUsers = res;
            console.log(this.listUsers);
          },
      err => {
          console.log(err);
            }
      );

  //   // Dung http với Promise
  // this.userService.getUsers()
  // .then( result => {
  //   console.log('ALL Data: ', result);
  //   this.listUsers = result;
  // })
  // .catch( error => {
  //   console.log('Error Getting Data: ', error);
  // });
  }

}
