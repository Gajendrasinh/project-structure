import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends ParentComponent implements OnInit{ 

  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
  }

}
