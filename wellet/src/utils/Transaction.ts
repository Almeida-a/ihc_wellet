import { incomes } from "src/storage/IncomesStorage";
import { expenses } from "src/storage/ExpensesStorage";
import { User } from "./User";

export class Transaction {

    public constructor (private _visibility: TransactionVisibility, private _type: TransactionType, 
        private _user: User, private _name?: string, private _value?: number, private _category?: string) {
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

    public get user() : User {
        return this._user;
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
        return new Transaction(this._visibility, this._type, 
            this._user, this._name, this._value, this._category);
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