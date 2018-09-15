import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends ParentComponent implements OnInit{ 

  pageTitle:string = "Dashboard";
  
  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
    this.titleService.setTitle("KAP - Dashboard");
  }

}
