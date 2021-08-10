import { TeamService } from 'src/app/shared/services/team.service';
import { MemberService } from './../../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { State } from 'src/app/shared/models/state.model';
import { Action } from 'rxjs/internal/scheduler/Action';



@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss'],
})
export class MemberActionContainerComponent implements OnInit {
  form: FormGroup;
  state: State;
  page: string;
  actionTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initView();
    this.initForm();

    
  }

  initView(): void{
    this.state = this.activatedRoute.snapshot.data.state;
    this.page = this.activatedRoute.snapshot.queryParams.page;
    this.actionTitle = this.state === State.Create ? 'Create' : 'Update' ;
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required]),
      lastName: this.formBuilder.control(null, [Validators.required]),
      title: this.formBuilder.control(null, [Validators.required]),
      role: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.email]),
      country: this.formBuilder.control(null),
      street: this.formBuilder.control(null),
      city: this.formBuilder.control(null),
      state: this.formBuilder.control(null),
      zip: this.formBuilder.control(null),
      id: this.formBuilder.control(null),
    });

    if (this.state === State.Edit){
      const member = this.getMember(this.activatedRoute.snapshot.params.id);
      this.form.patchValue(member);
    }

    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  action(): void {
    if (this.state === State.Edit){
      this.editMember(this.activatedRoute.snapshot.params.id, this.form.value)
    } else {
      this.addMember(this.form.value);
    }
    this.router.navigate([`/${this.page}`])
  }

  getMember(id: string){
    return this.actionService().getMember(id);
  }

  editMember(id: string, data){
    this.actionService().editMember(id, data);
  }

  addMember(data){
    this.actionService().addMember(data);
  }

  actionService(){
    let action;
    switch(this.page){
      case 'dashboard':
        action = this.memberService;
        break;
      case 'team':
        action = this.teamService;
        break;
    }
    return action;
  }
}
