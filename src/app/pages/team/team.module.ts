import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamContainerComponent } from './components/team-container/team-container.component';


@NgModule({
  declarations: [
    TeamContainerComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
  ]
})
export class TeamModule { }
