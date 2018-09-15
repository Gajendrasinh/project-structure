import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'user-management', component: UserManagementComponent },
   { path: 'availability', component: AvailabilityComponent },
   { path: 'reporting', component: ReportingComponent },
   { path: 'reference', component: ReferenceComponent },
   { path: 'templates', component: TemplatesComponent },
   { path: 'workload', component: WorkloadComponent },
   { path: 'account-validation', component: AccountValidationComponent },
   { path: 'request', component: RequestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
