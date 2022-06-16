import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllCasesComponent } from './all-cases/all-cases.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { ReportComponent } from './report/report.component';
import { ActiveCaseComponent } from './active-case/active-case.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllCasesComponent,
    CreateCaseComponent,
    HeaderComponent,
    FooterComponent,
    ReportComponent,
    ActiveCaseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
