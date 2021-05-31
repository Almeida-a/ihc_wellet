import { incomes } from "src/storage/IncomesStorage";
import { expenses } from "src/storage/ExpensesStorage";

export class Transaction {
    
    private _name?: string;
    private _value?: number;
    private _category?: string;
    private _type: TransactionType;
    private _visibility: TransactionVisibility;

    public constructor () {
        this._name = undefined;
        this._value = undefined;
        this._category = undefined;
        this._type = TransactionType.EXPENSE;
        this._visibility = TransactionVisibility.VISIBLE;
    }

    public get name() : string | undefined {
        return this._name;
    }
    
    public get value() : number | undefined {
        return this._value;
    }

    public get category() : string | undefined {
        return this._category;
    }

    public get type(): TransactionType {
        return this._type;
    }

    public get visibility() : TransactionVisibility {
        return this._visibility;
    }
    
    public set name(newName: string | undefined) {
        this._name = newName;
    }
    
    public set value(newValue: number | undefined) {
        this._value = newValue;
    }

    public set category(newCategory: string | undefined) {
        this._category = newCategory;
    }

    public set type(newType: TransactionType) {
        this._type = newType;
    }

    public set visibility(newVisibility: TransactionVisibility) {
        this._visibility = newVisibility;
    }

    public save() {
        if (this._type == TransactionType.EXPENSE) 
            expenses.push(this.clone());
        else 
            incomes.push(this.clone());
    }

    public clone(): Transaction {
        
        let clonedObj = new Transaction();

        clonedObj.name = this.name;
        clonedObj.value = this.value;
        clonedObj.category = this.category;
        clonedObj.type = this.type;
        clonedObj.visibility = this.visibility;
        
        return clonedObj;
    }

}

export enum TransactionType {
    EXPENSE = "Expense",
    INCOME = "Income"
}

export enum TransactionVisibility {
    VISIBLE = "Visible",
    HIDDEN = "Hidden"
}