import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent extends ParentComponent implements OnInit{ 

  pageTitle:string = "Request";

  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
    this.titleService.setTitle("KAP - Request");
  }

}
