import { Component, ViewChild, OnInit } from "@angular/core";
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
import { incomes } from "src/storage/IncomesStorage";
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
export class SoloGraphComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public categories !: (string | null)[];
  public curr_type!: string;
  public curr_cat: string;
  
  constructor() {
    this.curr_type = 'Expenses';
    this.curr_cat = this.getCategories() ? this.getCategories()[0] : "None";

    this.chartOptions = {
      series: [
        {
          name: this.curr_cat,
          data: this.getTransactionsData(this.curr_type, this.curr_cat),
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
        text: this.curr_type,
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
  ngOnInit(): void {
    this.categories = this.getCategories();
  }

  // Does not work as normal function, only as arrow function
  public getCategories = () : string [] => {
    // TODO: discard repeated elements
    let transactions: Transaction[] = this.curr_type == "Expenses" ? expenses : incomes;
    return transactions.map(e=>{
      if(e.category==undefined)
        return "None";
      return e.category;
    });
  }

  /**
   * changeCategory
   */
  public changeCategory(category: string): void {
    this.chartOptions.series= [
      {
        name: category,
        data: this.getTransactionsData(this.curr_type, category),
      }
    ]
  }

  /**
   * changeType
   */
  public changeType(type: string): void {
    this.curr_type = type;
    this.categories = this.getCategories();
    this.curr_cat = this.categories[0] != null ? this.categories[0] : "None";
    this.chartOptions.title = {
      text: this.curr_type,
      align: "left"
    };
    this.changeCategory(this.curr_cat);
  }

  public getTransactionsData = function(type: string, category: string) : (number | null)[] {
    
    var transactionsData: (number | null)[];// TODO [number, number | null][]; when datetime axis is possible
    var transactionsTmp!: Transaction[];
    // Get all (expenses) transactions 
    // =expenses object
    // Filter transactions where t.category()==category
    if(type=='Expenses') {
      transactionsTmp = expenses.filter(e=>e.category==category);
    } else if (type=='Incomes') {
      transactionsTmp = incomes.filter(i=>i.category==category);
    }
    // Get their dates and values:
    //  Parse data to -> data format consumable by the chart (expensesData = cast(expensesTmp))
    transactionsData = transactionsTmp.map(e=>{
      if(e.value==undefined) {
        return null;
      } else {
        return e.value;
      }
    }); // is it possible to get transaction date ?

    return transactionsData;
  }
}
