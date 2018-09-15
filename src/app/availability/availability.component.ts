import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent extends ParentComponent implements OnInit{ 

  pageTitle:string = "Availability";

  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
    this.titleService.setTitle("KAP - Availability");
  }

}
