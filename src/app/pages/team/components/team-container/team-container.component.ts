import { Component, OnInit } from '@angular/core';
import { TableTitle } from 'src/app/shared/components/table/table-header/@types/table-headers.model';
import { TeamService } from 'src/app/shared/services/team.service';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {

  tableHeaders: TableTitle[] = [
    {
      text: 'Name',
      visible: true,
    },
    {
      text: 'Title',
      visible: true,
    },
    {
      text: 'Status',
      visible: true,
    },
    {
      text: 'Role',
      visible: true,
    },
    {
      text: 'Edit',
      visible: false,
    },
  ];

  page = 1;
  
  constructor(public teamService: TeamService ) { }

  ngOnInit(): void {
  }

}
