export interface RepoDocument {
    id: number,
    name: string,
    date: Date,
    category: string
}

export class Document {

    constructor(private _id: number, private _name: string, private _date: Date, private _category: string) {
        
    }

}
