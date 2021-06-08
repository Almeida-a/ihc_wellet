import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-solo-graph',
  templateUrl: './solo-graph.component.html',
  styleUrls: ['./solo-graph.component.css']
})
export class SoloGraphComponent implements OnInit {

  // Graph
  public soloGraphOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public soloGraphLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public soloGraphData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Expenses'},
  ];
  public soloGraphType: ChartType = 'line';
  public soloGraphLegend= true;
  public soloGraphColors = [
    {
      backgroundColor: ["grey", "orange"],
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
