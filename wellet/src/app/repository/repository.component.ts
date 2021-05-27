import { Component, OnInit } from '@angular/core';
import { RepoDocument } from './document';
import { MOCK_REPOSITORY } from './mock-repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repoDocuments: RepoDocument[]

  constructor() {
    this.repoDocuments = MOCK_REPOSITORY;
  }

  ngOnInit(): void {
  }

}
