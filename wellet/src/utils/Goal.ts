import { goals } from "src/storage/GoalsStorage";

export class Goal {

    public constructor (private _state: string = "progress", private _name: string, private _currentValue: number = 0, private _finalValue: number, private _deadline: Date,
        private _description?: string, private _image?: string) {
    }

    // public get id() : number {
    //     return this._id;
    // }

    public get state() : string {
        return this._state;
    }

    public get name() : string {
        return this._name;
    }
    
    public get description() : string | undefined {
        return this._description;
    }

    public get currentValue() : number {
        return this._currentValue;
    }

    public get finalValue() : number {
        return this._finalValue;
    }

    public get deadline() : Date {
        return this._deadline;
    }

    public get image() : string | undefined {
        if (!this._image) 
            return "../../assets/no_image_background.jpg";
        return this._image;
    }
    
    // public set id(newValue: number) {
    //     this._id = newValue;
    // }

    public set state(newValue: string) {
        this._state = newValue;
    }

    public set name(newValue: string) {
        this._name = newValue;
    }

    public set description(newValue: string | undefined) {
        this._description = newValue;
    }
    
    public set currentValue(newValue: number) {
        this._currentValue = newValue;
    }

    public set finalValue(newValue: number) {
        this._finalValue = newValue;
    }

    public set deadline(newValue: Date) {
        this._deadline = newValue;
    }

    public set image(newValue: string | undefined) {
        this._image = newValue;
    }

    public save() {
        goals.push(this.clone());
    }

    public clone(): Goal {
        return new Goal(this._state, 
            this._name, this._currentValue, this._finalValue, this._deadline, this.description, this.image);
    }

}