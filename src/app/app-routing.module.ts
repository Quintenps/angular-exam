import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './features/overview/overview.component';
import { ResultsComponent } from './features/results/results.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full'} ,
  { path: 'team/:id', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
