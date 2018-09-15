import { Component, OnInit, Injector, Input } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent extends ParentComponent implements OnInit{ 

  @Input() breadcrumbPath: string;
  
  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
  }

}
