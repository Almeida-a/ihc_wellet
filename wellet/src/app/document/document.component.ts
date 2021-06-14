import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  pdfSrc = "../../assets/FaturaEDP.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
