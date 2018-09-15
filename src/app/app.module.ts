import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent-component/parent.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ReferenceComponent } from './reference/reference.component';
import { TemplatesComponent } from './templates/templates.component';
import { WorkloadComponent } from './workload/workload.component';
import { AccountValidationComponent } from './account-validation/account-validation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RequestComponent } from './request/request.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'pathshala-frontend' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    OwlModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    UserManagementComponent,
    AvailabilityComponent,
    ReportingComponent,
    ReferenceComponent,
    TemplatesComponent,
    WorkloadComponent,
    AccountValidationComponent,
    BreadcrumbComponent,
    RequestComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
