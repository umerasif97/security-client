import { GeneralFiltering } from "./generalFiltering";

export interface RoleToBaseclassFiltering extends GeneralFiltering {
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: string[];
    roleIds?: string[];
}