import { Component, OnInit, Injector } from '@angular/core';
import { ParentComponent } from './../parent-component/parent.component';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  extends ParentComponent implements OnInit{ 

  constructor(inj:Injector) {
    super(inj);    
  }

  ngOnInit() {
  }

  doLogin(){
    this.modalService.open(LoginComponent)
  }

}
