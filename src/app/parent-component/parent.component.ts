import { Component, OnInit, PLATFORM_ID, Injector, NgZone, APP_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { SharedService } from './../services/shared.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(injector: Injector) {    
      this.router = injector.get(Router)
      this.platformId = injector.get(PLATFORM_ID)
      this.appId = injector.get(APP_ID)
      this.commonService = injector.get(SharedService)
      this.http = injector.get(HttpClient)
      this.titleService = injector.get(Title)
      this.metaService = injector.get(Meta)
      this.activatedRoute = injector.get(ActivatedRoute)
      this.baseUrl = environment.baseURL;
      this.modalService = injector.get(NgbModal)
  }
  public activatedRoute:ActivatedRoute;
  public titleService: Title
  public metaService: Meta
  public platformId : any;
  public appId : any;
  public http = this.http;
  public router : Router;
  public commonService : SharedService;
  public baseUrl;
  public modalService;
  public translate;
  public scrollTopService;
  // *************************************************************//
  //@Purpose : We can use following function to use localstorage
  //*************************************************************//
  setToken(key,value){
      if(isPlatformBrowser(this.platformId)){
        window.localStorage.setItem(key,value);
      }
  }
  getToken(key){
      if(isPlatformBrowser(this.platformId)){
        return window.localStorage.getItem(key);
      }
  }
  removeToken(key){
      if(isPlatformBrowser(this.platformId)){
        window.localStorage.removeItem(key);
      }
  }
  clearToken(){
      if(isPlatformBrowser(this.platformId)){
        window.localStorage.clear()
      }
  }

  ngOnInit() {
  }

}
