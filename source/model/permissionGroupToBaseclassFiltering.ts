import { GeneralFiltering } from "./generalFiltering";

export interface PermissionGroupToBaseclassFiltering extends GeneralFiltering {
    baseclassIds?: string[];
    permissionGroupIds?: string[];
}