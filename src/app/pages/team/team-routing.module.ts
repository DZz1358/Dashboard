import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamContainerComponent } from './components/team-container/team-container.component';

const routes: Routes = [
  {
    path: '',
    component: TeamContainerComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
