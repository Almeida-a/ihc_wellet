import { workspaces } from "src/storage/WorkspacesStorage";
import { User } from "./User";

export class Workspace {

    private _name: string;
    private _users: User[];
    private _active: boolean;

    public constructor (name: string, users: User[], active: boolean) {
        this._name = name;
        this._users = users;
        this._active = active;
    }

    public get name() : string {
        return this._name;
    }
    
    public get users() : User[] {
        return this._users;
    }

    public get active() : boolean {
        return this._active;
    }

    public set active(newValue: boolean) { 
        this._active = newValue;
    }

    public addUser(user : User) : void {
        this._users.push(user);
    }

    public save() {
        workspaces.push(this.clone());
    }

    public clone(): Workspace {
        return new Workspace(this.name, this.users, this.active);
    }

}