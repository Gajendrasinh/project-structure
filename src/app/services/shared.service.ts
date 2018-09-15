import { Component, PLATFORM_ID, Injectable, EventEmitter, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  authorised :any= false;
  public baseURL;
  public platformId;
  
	constructor(public _http:HttpClient, @Inject(PLATFORM_ID) platformId: Object) {
		this.platformId = platformId;
		this.baseURL = environment.baseURL
	}
	
	public getToken(key){
      if(isPlatformBrowser(this.platformId)){
        return window.localStorage.getItem(key);
      }
  }
  public setToken(key,value){
      if(isPlatformBrowser(this.platformId)){
        window.localStorage.setItem(key,value);
      }
  }

	httpRequest(APIEndPoint, data, method,isForm?, isPublic?): Promise<any> {		
		let headers;
		if(isPublic){
			headers = new HttpHeaders({ "content-Type": "application/json"});
		}else{
			headers = new HttpHeaders({ "content-Type": "application/json", 'auth': this.getToken('accessToken')});
		}
		if(isForm){
			headers = new HttpHeaders({ 'auth': this.getToken('accessToken') });
		}
		return new Promise((resolve, reject) => {
			if(method == 'post'){
				this._http.post(this.baseURL + APIEndPoint, data, { headers })
				.subscribe(data => { resolve(data) }, error => { this.showServerError(error)})
			}else if(method == 'get'){
				this._http.get(this.baseURL + APIEndPoint, { headers })
				.subscribe(data => { resolve(data) }, error => { this.showServerError(error)})
			}
		})
  }
  
  showServerError(e){
    console.log(e)
  }
  
  
}
