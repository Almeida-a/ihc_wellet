import { Time } from "@angular/common";
import { RepoDocument } from "../repository/document";

export interface HistItem {
    label: string,
    info: string,
    date: number,
    // TODO: add time (low priority)
    time: Time,
    document?: RepoDocument // Optional
}