import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent extends ParentComponent implements OnInit{ 

  pageTitle:string = "Templates";

  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
    this.titleService.setTitle("KAP - Templates");
  }

}
