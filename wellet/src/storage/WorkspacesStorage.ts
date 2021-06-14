import { Workspace } from "src/utils/Workspace";
import { users } from "./UsersStorage";

export let workspaces : Workspace[] = [
    new Workspace('Workspace 1', [users[0], users[1]], true),
    new Workspace('Workspace 2', [users[0], users[2]], false),
    new Workspace('Workspace 3', users, false)
];