import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { TabComponent } from './reusable/tab/tab.component';
import { FormsModule } from '@angular/forms';

// Import PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { BasicInformationComponent } from './component/basic-information/basic-information.component';
import { ParentInformationComponent } from './component/parent-information/parent-information.component';
import { GuardiansInformationComponent } from './component/guardians-information/guardians-information.component';
import { SiblingInformationComponent } from './component/sibling-information/sibling-information.component';
import { StudentInformationComponent } from './component/student-information/student-information.component';
import { HealthInformationComponent } from './component/health-information/health-information.component';
import { SchoolAdminComponent } from './component/school-admin/school-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent,
    ParentInformationComponent,
    GuardiansInformationComponent,
    SiblingInformationComponent,
    StudentInformationComponent,
    HealthInformationComponent,
    SchoolAdminComponent,
    // TabComponent,
    // PanelModule,
    // PanelMenuModule,
    // TabMenuModule,
    // TabViewModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonModule,
    // BasicInformationComponent,
    // InputTextModule,
    // TabComponent,
    PanelModule,
    PanelMenuModule,
    TabMenuModule,
    TabViewModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
