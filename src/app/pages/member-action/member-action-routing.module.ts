import { MemberActionContainerComponent } from './components/member-action-container/member-action-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { State } from 'src/app/shared/models/state.model';

const routes: Routes = [
  {
    path: 'new',
    component: MemberActionContainerComponent,
    data: {
      state: State.Create,
    }
  },
  {
    path: ':id',
    component: MemberActionContainerComponent,
    data: {
      state: State.Edit,
    }

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberActionRoutingModule {}
