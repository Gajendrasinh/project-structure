import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent extends ParentComponent implements OnInit{ 

  pageTitle:string = "User Management";

  constructor(inj:Injector) {
    super(inj);    
  }
  
  ngOnInit() {
    this.titleService.setTitle("KAP - User Management");
  }

}
