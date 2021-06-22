import { Component, OnInit } from '@angular/core';
import { RepoDocument } from './document';
import { MOCK_REPOSITORY } from './mock-repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repoDocuments: RepoDocument[];
  inspectedDocument?: RepoDocument;

  searchOptions: String[];
  searchOption: String;

  constructor() {
    this.repoDocuments = MOCK_REPOSITORY;
    this.searchOptions = ["Name", "Date", "Category"]
    this.searchOption = "default";
  }

  ngOnInit(): void {
    
  }

  setInspectedDocument(document: RepoDocument) : void {
    this.inspectedDocument = document;
  }

}
