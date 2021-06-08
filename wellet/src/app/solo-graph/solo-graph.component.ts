import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-solo-graph',
  templateUrl: './solo-graph.component.html',
  styleUrls: ['./solo-graph.component.css']
})
export class SoloGraphComponent implements OnInit {

  // Graph
  public soloGraphOptions: ChartOptions = {
    responsive: true,
  }
  public soloGraphLabels: Label[] = ['Expenses'];
  public soloGraphData: number[] = [11, 12, 13];
  public soloGraphType: ChartType = 'line';
  public soloGraphLegend= true;
  public soloGraphColors = [
    {
      backgroundColor: ["black", "orange"],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public graphHovered({event, active}: {event: MouseEvent, active: {}[]}): void {
    console.log(event, active);
  }

}
