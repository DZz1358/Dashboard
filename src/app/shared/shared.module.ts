import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from './services/member.service';
import { TeamService } from './services/team.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService, TeamService],
    };
  }
}
