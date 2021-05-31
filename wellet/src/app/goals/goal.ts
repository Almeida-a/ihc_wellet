export interface Goal {
    id: number;
    state: string;
    name: string;
    description: string;
    currentValue: number;
    finalValue: number;
    deadline: Date;
    image: string; //URL
  }