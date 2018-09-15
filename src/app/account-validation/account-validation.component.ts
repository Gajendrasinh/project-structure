import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-account-validation',
  templateUrl: './account-validation.component.html',
  styleUrls: ['./account-validation.component.css']
})
export class AccountValidationComponent extends ParentComponent implements OnInit{ 

  pageTitle:string = "Account Validation";

  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
    this.titleService.setTitle("KAP - Account Validation");
  }

}
