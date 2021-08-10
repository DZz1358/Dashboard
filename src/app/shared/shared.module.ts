import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberService } from './services/member.service';
import { TeamService } from './services/team.service';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
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
    HttpClientModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService, TeamService, PostService],
    };
  }
}
