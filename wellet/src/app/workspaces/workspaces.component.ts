import { Component, OnInit } from '@angular/core';
import { workspaces } from 'src/storage/WorkspacesStorage';
import { Workspace } from 'src/utils/Workspace';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {

  allWorkspaces?: Workspace[];

  constructor() {
    this.allWorkspaces = workspaces;
  }

  ngOnInit(): void { }

}
