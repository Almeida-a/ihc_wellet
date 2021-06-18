import { Component, ViewChild } from "@angular/core";
// Apex charts docs at: apexcharts.com
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { expenses } from "src/storage/ExpensesStorage";
import { Transaction } from "src/utils/Transaction";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-solo-graph",
  templateUrl: "./solo-graph.component.html",
  styleUrls: ["./solo-graph.component.css"]
})
export class SoloGraphComponent {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Food",
          data: this.getExpensesData("Food"),
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Expenses: monthly",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        type: "numeric",
        axisTicks: {
          show: true,
        }
      }
    };
  }

  public getCategories = function() : (string | undefined)[] {
    return expenses.map(e=>e.category);
  }

  /**
   * changeCategory
   */
  public changeCategory(category: string): void {
    this.chartOptions.series= [
      {
        name: category,
        data: this.getExpensesData(category),
      }
    ]
  }

  public getExpensesData = function(category: string) : (number | null)[] {
    
    var expensesData: (number | null)[];// [number, number | null][]; case datetime axis is possible
    var expensesTmp: Transaction[];
    // Get all (expenses) transactions 
    // =expenses object
    // Filter transactions where t.category()==category
    expensesTmp=expenses.filter(e=>e.category==category);
    // Get their dates and values:
    //  Parse data to -> data format consumable by the chart (expensesData = cast(expensesTmp))
    expensesData = expensesTmp.map(e=>{
      if(e.value==undefined) {
        return null;
      } else {
        return e.value;
      }
    }); // is it possible to get transaction date ?

    return expensesData;
  }

}
