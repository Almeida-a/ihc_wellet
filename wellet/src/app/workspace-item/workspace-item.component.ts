import { Component, Input, OnInit } from '@angular/core';
import { Workspace } from 'src/utils/Workspace';

@Component({
  selector: 'app-workspace-item',
  templateUrl: './workspace-item.component.html',
  styleUrls: ['./workspace-item.component.css']
})
export class WorkspaceItemComponent implements OnInit {

  @Input()
  workspace?: Workspace;

  constructor() { }

  ngOnInit(): void {
  }

}
