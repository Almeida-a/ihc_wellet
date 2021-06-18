export interface RepoDocument {
    id: number,
    name: string,
    date: Date,
    category: string
}

export class Document {

    constructor(private _id: number, private _name: string, private _date: Date, 
        private _category: string, private _path: string) {}

    public get id() : number {return this._id;}
    public get name() : string {return this._name;}
    public get date() : Date {return this._date;}
    public get category() : string {return this._category;}
    public get path() : string {return this._path;}

    public set id(newValue : number) {this._id = newValue;}
    public set name(newValue : string) {this._name = newValue;}
    public set date(newValue : Date) {this._date = newValue;}
    public set category(newValue : string) {this._category = newValue;}
    public set path(newValue : string) {this._path = newValue;}
        
    public clone() : Document {
        return new Document(this.id, this.name, this.date, this.category, this.path);
    }

    public save() : void {}

}
