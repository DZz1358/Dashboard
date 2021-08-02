import { MemberService } from './../../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { State } from 'src/app/shared/models/state.model';



@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss'],
})
export class MemberActionContainerComponent implements OnInit {
  form: FormGroup;
  state: State;
  actionTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initView();
    this.initForm();
  }

  initView(): void{
    this.state = this.activatedRoute.snapshot.data.state;
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
      const member = this.memberService.getMember(
        this.activatedRoute.snapshot.params.id
      );
      this.form.patchValue(member);
    }

    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  action(): void {
    // ;
    if (this.state === State.Edit){
      this.memberService.editMember(this.activatedRoute.snapshot.params.id, this.form.value);
    } else {
      this.memberService.addMember(this.form.value)
    }
    this.router.navigate(['/dashboard'])
  }
}
