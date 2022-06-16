import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AllCasesComponent } from "./all-cases/all-cases.component";
import { CreateCaseComponent } from "./create-case/create-case.component";
import { ActiveCaseComponent } from "./active-case/active-case.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ReportComponent } from "./report/report.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'all-cases',
        component: AllCasesComponent
    },
    {
        path: 'create-case',
        component: CreateCaseComponent
    },
    {
        path: 'active-case',
        component: ActiveCaseComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}