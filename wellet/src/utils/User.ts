import { users } from '../storage/UsersStorage'

export class User {
    
    private _name: string;
    private _email: string;
    private _description?: string;
    private _image?: string;
    private _status?: UserStatus;

    public constructor (name_: string, email_: string, description_?: string, image_?: string, status_?: UserStatus) {
        this._name = name_;
        this._email = email_;
        this._description = description_;
        this._image = image_;
        this._status = status_;
    }

    public get name() : string {
        return this._name;
    }
    
    public get email() : string {
        return this._email;
    }

    public get description() : string | undefined {
        return this._description;
    }
    
    public get image() : string | undefined {
        return this._image;
    }

    public get status() : UserStatus | undefined {
        return this._status;
    }

    public set description(newDescription: string | undefined) {
        this._description;
    }

    public set image(newImage: string | undefined) {
        this._image = newImage;
    }

    public set status(newStatus: UserStatus | undefined) {
        this._status = newStatus;
    }

    public save() {
        users.push(this.clone());
    }

    public clone(): User {
        return new User(this.name, this.email, this.description, this.image);
    }

}

export enum UserStatus {
    ACTIVE = 0,
    INVITED = 1,
    INACTIVE = 2
}