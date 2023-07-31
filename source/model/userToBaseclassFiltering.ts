import { GeneralFiltering } from "./generalFiltering";

export interface UserToBaseclassFiltering extends GeneralFiltering {
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: string[];
    userIds?: string[];
}